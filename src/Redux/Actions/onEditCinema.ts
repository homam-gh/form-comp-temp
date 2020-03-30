import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IPlaceModel} from "../../Models/PlaceModel"
import {IstateEditCinema} from "../../Models/CinemaModel"
export const onEditCinema = (data:IstateEditCinema)=>{
    return{
        data:data,
        type:EActionTypes.EDIT_CINEMA,
        
    }
}

export const editCinema = (data:IPlaceModel,index:number) => {
    return {
        data: data,
        type:EActionTypes.EDIT_CINEMA_DETAIL,
        index:index
        
    }
}