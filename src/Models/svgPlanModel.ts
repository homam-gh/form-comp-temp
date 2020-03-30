export interface IchairModel{
	tag:string,
	id:string
}

export interface IplanModel {
	id:string 
	name:string
	chairs:Array<IchairModel>|undefined
}

export interface ISalonModel {
	id:string
	name:string
	plan : Array<IplanModel>
}
