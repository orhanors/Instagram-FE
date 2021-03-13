# Instagram Web Clone Frontend implemented using ReactJs and Redux
Run this project locally 

```bash
  npm i
```
```bash
  npm start
```

### Features

<details>
<summary><b> Redux Store to manage loggedin user info </b></summary>
    <p> Redux store setted up with redux-toolkit and API middleware </p>
    
   <p> Here is the implementation of basic API call. We use redux ducks apporach which suggests to keep all related implemantation in one file instead of 
   seperating them as actions,reducers etc. <p>
    
```javascript
   export const login = (data) =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/auth/login`,
		method: "post",
		data,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});
```
 If want to learn more about middleware implementation and using redux ducks approach you check my starter template 
	[here](https://github.com/orhanors/React-Redux-Typescript-Starterkit)
</details>


<details>
<summary><b> Protected Route for rendering routes conditionally </b></summary>
    <p> We're protecting all the routes from not loggedin users. User should login or signup to see homepage and the other pages </p>
    
   <p> Here is the implementation of super powerful Protected Route <p>
    
```javascript
  const ProtectedRoute = ({ component: Component, ...rest }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.data);
	const history = useHistory();
	useEffect(() => {
		if (isAuthUser()) {
			console.log(rest.path);
			if (rest.path === "/") {
				dispatch(getUserProfile());
			}
		}
	}, []);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthUser() ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	);
};
```
Woww that's really cool right. But what the hack is that. Let's see what's going there:

We're keeping a not httpOnly boolean cookie to manage user status. It doesn't contain any sensitive information about user. It just contain a boolean value to check if the user is loggedin. Evertime when we send a request to our [backend](https://github.com/orhanors/Instagram-BE) and it returns a 200 or 201 response we're setting some cookies on browser. These cookies are <strong>token</strong>, <strong>refreshToken</strong> and <strong>isAuthUser</strong>. token and refreshToken cookies are httpOnly to prevent attackers to get user precious token. isAuthUser is not a httpOnly cookie, so we can manage user loggedin status using this cookie.

Here's a little helper function to check this cookie:

```javascript
import { getCookie } from "./cookies";

export const isAuthUser = () => {
	return getCookie("isAuthUser") === "true";
};
```

In our protected route we can create a condition using this cookie. <h5> If the user is loggedin allow him/her to see our precious routes. Otherwise go back to login page. </h5> Yeapp. You now the biggest secret now. Please don't hack my website

What about useEffect and dispatch? We're saying our protected route to fetch user info everytime when I call you and set my redux user state with user information. So I can get user information whatever component I want. Also we have a condition there. 

```javascript
if (rest.path === "/") {
  dispatch(getUserProfile());
}
```
We have this condition to make just one API call. Otherwise this will make API call for each protected route. We want to keep our application performence well.

And the funniest part is using this ProtectedRouter. What we need to do is just using ProtectedRouter instead of normal react Route.

```javascript
<Route path='/login' exact component={Login} />
<Route path='/signup' exact component={Signup} />
<ProtectedRoute path='/' exact component={Home} />
<ProtectedRoute path='/dm/message' exact component={Message} />
<ProtectedRoute path='/:user' exact component={Profile} />
```			
</details>
