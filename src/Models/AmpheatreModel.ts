import {ISalonModel} from "./svgPlanModel"

export interface IApheatreModel {
    name:string,
    cinema :string,
    chair:number,
    floor:number,
    svgTranslate: ISalonModel
}


export interface IAmphitheatreActionModel {
   data: IApheatreModel
   type: string
}

export interface IAnAmphitheatreModel extends IApheatreModel{
    index:number
 
}

export interface IAmphiActionModel {
    data: IAnAmphitheatreModel
    type: string
}
