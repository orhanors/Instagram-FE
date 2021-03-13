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
<p> If want to learn more about middleware implementation and using redux ducks approach you check my starter template [here](https://github.com/orhanors/React-Redux-Typescript-Starterkit) </p>
</details>

