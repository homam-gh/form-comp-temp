import * as React from "react"
import { IFormElData, IInputData, IFormProps } from './Form/Models'
import InputComponent from './Form/InputComp'
import ICustomForm from './Form/Form'

export interface InputData extends IInputData { }
export interface FormElData extends IFormElData { }

export class CathodInput extends React.Component<InputData> {
  render() {
    return (
      <InputComponent
        label={this.props.label}
        name={this.props.name}
        value={this.props.value}
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

