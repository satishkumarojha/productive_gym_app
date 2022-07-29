import * as types from './actiontypes'
const init = {
    todo:[],
    isError:false,
    isLoading:false
}
export const todoReducer = (state = init,{type,payload})=>{
    switch (type){
        case types.GET_TODO_LOADING :{
            return {
                ...state,
                isError:false,
                isLoading:true
            };
        }
        case types.GET_TODO_SUCCESS :{
            return {
                ...state,
                todo:payload,
                isError:false,
                isLoading:false
            };
        } 
        case types.GET_TODO_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        }
        case types.POST_TODO_LOADING :{
            return {
                ...state,
                isError:false,
                isLoading:true
            };
        }
        case types.POST_TODO_SUCCESS :{
            let newarr = [...state.todo,payload];
            return {
                ...state,
                todo:newarr,
                isError:false,
                isLoading:false
            };
        } 
        case types.POST_TODO_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        }  
        case types.EDIT_TODO_LOADING :{
            console.log("edit load");
            return {
                ...state,
                isError:false,
                isLoading:true
            };
        }
        case types.EDIT_TODO_SUCCESS :{
            // console.log(pay)
            let newarr = state.todo.map((ele)=>ele.id===payload.id?{...ele,title:payload.title}:ele);
            // console.log(newarr);
            return {
                ...state,
                todo:newarr,
                isError:false,
                isLoading:false
            };
        } 
        case types.EDIT_TODO_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        }
        case types.REMOVE_TODO_LOADING :{
            return {
                ...state,
                isError:false,
                isLoading:true
            };
        }
        case types.REMOVE_TODO_SUCCESS :{
            let newarr = state.todo.filter((ele)=>ele.id!==payload);
            return {
                ...state,
                todo:newarr,
                isError:false,
                isLoading:false
            };
        } 
        case types.REMOVE_TODO_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        }
        case types.TOGGLE_TODO_LOADING :{
            return {
                ...state,
                isError:false,
                isLoading:true
            };
        }
        case types.TOGGLE_TODO_SUCCESS :{
            console.log(payload);
            let newarr = state.todo.map((ele)=>ele.id===payload.id?{...ele,val:payload.val}:ele);
            console.log(newarr);
            return {
                ...state,
                todo:newarr,
                isError:false,
                isLoading:false
            };
        } 
        case types.TOGGLE_TODO_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        }
        default :{
            return state;
        }
    }
}