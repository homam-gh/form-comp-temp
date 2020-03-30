
import {IPlaceModel,ICinemaActionModel} from "../../Models/PlaceModel"
import {IAddCinemaAction} from "../../Models/CinemaModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IstateEditCinema} from "../../Models/CinemaModel"


const defaultStateEdit:IstateEditCinema = {
    
    
        name:"",
        description:"",
        address:"",
        index:0
    
    
}

export const reducerAddCinema = (state:Array<IPlaceModel> = [] , action:IAddCinemaAction)=>{
    let state2 = state

    switch(action.type){
        case EActionTypes.ADD_CINEMA:         
       
         return  [...state2,action.data]
         case EActionTypes.EDIT_CINEMA_DETAIL :
             if (action.index) {
                return       [
                    ...state2.slice(0,action.index),action.data,
                   ...state2.slice(action.index+1)
                 ]
             }
         
                 case EActionTypes.DELETE_CINEMA:
                    if (action.index) {
                        return  [
                            ...state2.slice(0,action.index),
                           ...state2.slice(action.index+1)
                         ] 
    
                    }
               
        default:
            return state
    }
}



//export interface editModel extends Array<IPlaceModel>

export const reducerEditCinema = (state:IstateEditCinema = defaultStateEdit , action:ICinemaActionModel) =>{
    switch(action.type){
         case EActionTypes.EDIT_CINEMA:
             return action.data
         //{...state, cinema:action.data}
        // case EActionType.DELETE_ITEM:
        //     return [
        //         ...state.slice(0,action.index),
        //         ...state.slice(action.index+1)
        //     ]
        default:
            return state
    }
}