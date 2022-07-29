import * as types from './actiontypes';

export const authTodosLoading = ()=>({type:types.AUTH_LOADING});
export const authTodosSuccess = (payload)=>({type:types.AUTH_SUCCESS,payload});
export const authTodosFailure = (payload)=>({type:types.AUTH_FAILURE,payload});
