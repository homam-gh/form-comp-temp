export interface IInputData {
	name: string,
	label: string,
	value?: string,
	type?: string,
	onChange?(e: any): void
}

export interface IFormElData {
	[key: string]: string | boolean | number
}

export type ICustomFormChildren = Array<null | React.ReactChild>

export interface IFormState {
	FormData: {
		[key: string]: string | boolean | number
	}
}

export interface IFormProps {
	FormData: IFormElData
	children: ICustomFormChildren
}

export interface ICheckboxData {
    name: string,
    label: string,
    value?: boolean,
    onChange?(e: any): void
}
  
export interface IRadioData {
    name: string,
    label: string,
    value: string,
    checked?: boolean,
    onChange?(e: any): void
}
	
export interface ISelectData {
	name: string,
	label: string,
	value?: string,
	placeholder: string,
	options: ISelectOption[],
	onChange?(e: any): void
}
  
export interface ISelectOption {
	value: string,
	label: string
}
  