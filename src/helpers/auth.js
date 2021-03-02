import { getCookie } from "./cookies";

export const isAuthUser = () => {
	return getCookie("isAuthUser") === "true";
};
