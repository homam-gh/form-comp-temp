import * as React from "react"
import { IFormElData, IInputData, ICheckboxData, IFormProps, IRadioData, ISelectData, ISelectOption } from './Form/Models'
import InputComponent from './Form/InputComponent'
import CheckboxComponent from './Form/CheckboxComponent'
import RadioComponent from "./Form/RadioComponent"
import SelectComponent from "./Form/SelectComponent"
import ICustomForm from './Form/Form'

export interface InputData extends IInputData { }
export interface CheckboxData extends ICheckboxData { }
export interface RadioData extends IRadioData { }
export interface SelectData extends ISelectData { }
export interface SelectOption extends ISelectOption { }
export interface FormElData extends IFormElData { }

export class CathodInput extends React.Component<InputData> {
  render() {
    return (
      <InputComponent
        label={this.props.label}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export class CathodCheckbox extends React.Component<CheckboxData> {
  render() {
    return (
      <CheckboxComponent
        label={this.props.label}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export class CathodRadio extends React.Component<RadioData> {
  render() {
    return (
      <RadioComponent
        label={this.props.label}
        name={this.props.name}
        value={this.props.value}
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    )
  }
}

export class CathodSelect extends React.Component<SelectData> {
  render() {
    return (
      <SelectComponent
        label={this.props.label}
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        options={this.props.options}
        onChange={this.props.onChange}
      />
    )
  }
}

export class CathodForm extends React.Component<IFormProps> {
  render() {
    return (
      <ICustomForm
        children={this.props.children}
        FormData={this.props.FormData}
      />
    )
  }
}

