import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { isAuthUser } from "../helpers/auth";

import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/user";

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

export default ProtectedRoute;
