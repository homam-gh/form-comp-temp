import {IApheatreModel} from "../../Models/AmpheatreModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"

export const addAmphitheatre = (data:IApheatreModel)=>{
    return{
        data:data,
        type:EActionTypes.ADD_AMPHITHEATRE
    }
}