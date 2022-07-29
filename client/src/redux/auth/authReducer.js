import * as types from './actiontypes'
import { loadData,saveData } from '../../utils/localStorage'
const init = {
    token:loadData("token_")||"",
    isError:false,
    isLoading:false
}
export const authReducer = (state=init,{type,payload})=>{
    switch (type){
        case types.AUTH_LOADING :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:true
            }
        } 
        case types.AUTH_SUCCESS :{
            console.log(payload.token);
            let newtoken = payload.token;
            saveData("token_",newtoken);
            return {
                ...state,
                token:payload.token,
                isError:false,
                isLoading:false
            }
        }
        case types.AUTH_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false

            }
        }
        default :{
            return state;
        }
    }
}