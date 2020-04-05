import React from 'react'
import { IInputData } from '../Models/formModels'

class InputComponent extends React.Component<IInputData> {
  constructor(props: IInputData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  // TODO: this any should be replaced
  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
    // Validation goes here
  }

  render() {
    const value = this.props.value
    const name = this.props.name
    const type = this.props.type ? this.props.type : "text"

    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        {
          this.props.type === 'textarea'
            ? (<textarea name={name} className="form-control" value={value} onChange={this.onChange} />)
            : (<input type={type} className="form-control" name={name} value={value} onChange={this.onChange} />)
        }
      </div>
    )
  }
}

export default InputComponent

