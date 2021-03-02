import { createAction } from "@reduxjs/toolkit";

export const apiCall = createAction("api/call");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");
