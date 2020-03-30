import {IPlaceModel} from "./PlaceModel"
export interface IstateEditCinema extends  IPlaceModel{
    
    index:number
}

export interface IAddCinemaAction {
  
            data:IPlaceModel,
            type:string,
            index?:number
}