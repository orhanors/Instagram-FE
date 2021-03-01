import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthUser } from "../helpers/auth";

import { useDispatch } from "react-redux";
import { getUserProfile } from "../store/user";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthUser()) {
			dispatch(getUserProfile());
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
