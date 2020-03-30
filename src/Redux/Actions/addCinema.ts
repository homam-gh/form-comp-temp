import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IPlaceModel} from "../../Models/PlaceModel"
export const addCinema = (data:IPlaceModel)=>{
    return{
        data:data,
        type:EActionTypes.ADD_CINEMA
    }
}