import {IstateEditCinema} from "./CinemaModel"
import {IPlaceModel} from "./PlaceModel"
export interface IStoreModel extends  IstateEditCinema , Array<IPlaceModel>{

}