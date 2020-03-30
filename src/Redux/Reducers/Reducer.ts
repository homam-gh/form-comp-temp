import { combineReducers , createStore, ReducersMapObject, AnyAction } from 'redux'
import {reducerAddCinema as  reducerAddCinema ,reducerEditCinema} from "./reducer.addCinema"
import {reducerAmphitheatreForm} from "./reducer.ampkitheatreForm"
import {reducerAmphitheatre} from "./reducer.Amphitheatre"
import {IPlaceModel} from "../../Models/PlaceModel"
import {IStoreRedux} from "../Store/StoreModel"
import { Reducer } from 'redux';
import {IstateEditCinema} from "../../Models/CinemaModel"
import {IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {IApheatreModel} from "../../Models/AmpheatreModel"


const reducers: ReducersMapObject<IStoreRedux, AnyAction> = { // Action
  //  cinemas: reducerAddCinema //as reducerAddCinema<Array<IPlaceModel>, AnyAction>,
 cinemas: reducerAddCinema as Reducer<Array<IPlaceModel> , AnyAction>,
 cinema : reducerEditCinema as Reducer<IstateEditCinema, AnyAction>,
 amphitheatre: reducerAmphitheatreForm as Reducer<IAnAmphitheatreModel, AnyAction>,
 amphitheatres :reducerAmphitheatre as Reducer<Array<IApheatreModel>, AnyAction>,
  }

export const reducer = combineReducers(
    reducers

)