import {IPlaceModel} from "../../Models/PlaceModel"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {IApheatreModel} from "../../Models/AmpheatreModel"

export interface IStoreRedux {
    cinemas :Array<IPlaceModel>
    cinema: IstateEditCinema
    amphitheatre: IAnAmphitheatreModel
    amphitheatres : Array<IApheatreModel>

}