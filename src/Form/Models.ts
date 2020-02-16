export interface IInputData {
	name: string,
	label: string,
	value?: string,
	onChange?(e: any): void
}

export interface IFormElData {
	[key: string]: string
}

export type ICustomFormChildren = Array<null | React.ReactChild>

export interface IFormState {
	FormData: {
		[key: string]: string
	}
}

export interface IFormProps {
	FormData: IFormElData
	children: ICustomFormChildren
}
