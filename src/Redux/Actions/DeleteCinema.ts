import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IPlaceModel} from "../../Models/PlaceModel"

export const deleteCinema = (data:IPlaceModel,index:number) => {
    return {
        data: data,
        type:EActionTypes.DELETE_CINEMA,
        index:index
        
    }
}