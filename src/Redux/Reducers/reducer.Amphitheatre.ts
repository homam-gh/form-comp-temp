
import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IApheatreModel, IAmphitheatreActionModel} from "../../Models/AmpheatreModel"


// const defaultStateEdit:IstateEditCinema = {
    
    
//         name:"",
//         description:"",
//         address:"",
//         index:0
    
    
// }

export const reducerAmphitheatre = (state:Array<IApheatreModel> = [] , action:IAmphitheatreActionModel)=>{
    let state2 = state

    switch(action.type){
        case EActionTypes.ADD_AMPHITHEATRE:         
       
         return  [...state2,action.data]
        //  case EActionTypes.EDIT_CINEMA_DETAIL :
        //   return       [
        //             ...state2.slice(0,action.index),action.data,
        //            ...state2.slice(action.index+1)
        //          ]
        //          case EActionTypes.DELETE_CINEMA:
        //           return  [
        //                 ...state2.slice(0,action.index),
        //                ...state2.slice(action.index+1)
        //              ] 

        default:
            return state
    }
}