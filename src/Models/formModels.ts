// form props abstract
export interface IFormState {
	FormData: {
		[key: string]: string | boolean | number
	}
}

// basic input data from form component
export interface IFormElData {
    name: string,
	[key: string]: string | boolean | number
}

// form elemt children type
export type ICustomFormChildren = Array<null | React.ReactChild>

// form state abstract
export interface IFormProps {
	FormData: IFormElData
	children: ICustomFormChildren
}

// abstract basic data for all form elements
export interface BasicFormElemnetdata {
    name: string,
    label: string,
    id?: string,
    value?: string | boolean | number,
    onChange?(e: any): void
}


// porps structure for text inputs e.g text, textarea, email, phone, number ,...
export interface IInputData extends BasicFormElemnetdata {}

// porps structure for checkboxes
export interface ICheckboxData extends BasicFormElemnetdata{
    value?: boolean
}

// props structure for radios
export interface IRadioData {
    value?: string | number,
    checked?: boolean
}

// structure for select options
interface selectOption {
    value: string,
    label: string
}

// props structure for radios
interface selectData extends BasicFormElemnetdata {
    value?: string,
    placeholder: string,
    options: selectOption[]
}
