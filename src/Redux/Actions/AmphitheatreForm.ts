import {IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"


export const onAmphitheatreForm = (data:IAnAmphitheatreModel)=>{
    return{
        data:data,
        type:EActionTypes.AMPHITHEATRE_FORM,
        
    }
}