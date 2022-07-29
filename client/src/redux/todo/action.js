import * as types from './actiontypes';

export const getTodosLoading = ()=>({type:types.GET_TODO_LOADING});
export const getTodosSuccess = (payload)=>({type:types.GET_TODO_SUCCESS,payload});
export const getTodosFailure = (payload)=>({type:types.GET_TODO_FAILURE,payload});

export const postTodosLoading = ()=>({type:types.POST_TODO_LOADING});
export const postTodosSuccess = (payload)=>({type:types.POST_TODO_SUCCESS,payload});
export const postTodosFailure = (payload)=>({type:types.POST_TODO_FAILURE,payload});

export const editTodosLoading = ()=>({type:types.EDIT_TODO_LOADING});
export const editTodosSuccess = (payload)=>({type:types.EDIT_TODO_SUCCESS,payload});
export const editTodosFailure = (payload)=>({type:types.EDIT_TODO_FAILURE,payload});

export const removeTodosLoading = ()=>({type:types.REMOVE_TODO_LOADING});
export const removeTodosSuccess = (payload)=>({type:types.REMOVE_TODO_SUCCESS,payload});
export const removeTodosFailure = (payload)=>({type:types.REMOVE_TODO_FAILURE,payload});

export const toggleTodosLoading = ()=>({type:types.TOGGLE_TODO_LOADING});
export const toggleTodosSuccess = (payload)=>({type:types.TOGGLE_TODO_SUCCESS,payload});
export const toggleTodosFailure = (payload)=>({type:types.TOGGLE_TODO_FAILURE,payload});
