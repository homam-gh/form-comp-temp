export interface IPlaceModel {
    name:string,
    description:string,
    address:string
}

export interface ICinemaActionModel {
    data:IPlaceModel,
    index:number,
    type: string
}