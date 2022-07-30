import * as types from './actiontypes';

export const authTodosLoading = ()=>({type:types.AUTH_LOADING});
export const authTodosSuccess = (payload)=>({type:types.AUTH_SUCCESS,payload});
export const authTodosFailure = (payload)=>({type:types.AUTH_FAILURE,payload});

export const outTodosLoading = ()=>({type:types.OUT_LOADING});
export const outTodosSuccess = (payload)=>({type:types.OUT_SUCCESS,payload});
export const outTodosFailure = (payload)=>({type:types.OUT_FAILURE,payload});
