
import {addCinema} from "../Actions/addCinema"
import {IPlaceModel} from "../../Models/PlaceModel"
import {onEditCinema} from "../Actions/onEditCinema"
import {editCinema} from "../Actions/onEditCinema"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {deleteCinema} from "../Actions/DeleteCinema"
import {IApheatreModel,IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {onAmphitheatreForm} from "../Actions/AmphitheatreForm"
import {addAmphitheatre} from "../Actions/AddAmphitheatre"
import { Dispatch } from "redux";

export const mapDispatchToProps= (dispatch:Dispatch)=>{
    return{
        addCinema:(data:IPlaceModel)=>{
            
            dispatch(addCinema(data))
        
        
        },

        onEditCinema : (data:IstateEditCinema)=>{
            dispatch(onEditCinema(data))
        },
        editCinema :(data:IPlaceModel,index:number)=>{
            dispatch(editCinema(data,index))
        },
        deleteCinema : (data:IPlaceModel,index:number)=>{
            dispatch(deleteCinema(data,index))
        },
        onAmphitheatreForm : (data:IAnAmphitheatreModel) => {
            dispatch (onAmphitheatreForm(data))
        },
        addAmphitheatre :(data:IApheatreModel)=>{
            
            dispatch(addAmphitheatre(data))
        
        
        },
    }
}