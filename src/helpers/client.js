import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
const { REACT_APP_BE_URL } = process.env;

const backend = axios.create({
	baseURL: REACT_APP_BE_URL,
	withCredentials: true,
});

const refreshAuthLogic = (failedRequest) =>
	backend({
		url: `${REACT_APP_BE_URL}/auth/refreshToken`,
		withCredentials: true,
		method: "get",
	}).then((tokenRefreshResponse) => {
		return Promise.resolve();
	});

createAuthRefreshInterceptor(backend, refreshAuthLogic);

export default backend;
