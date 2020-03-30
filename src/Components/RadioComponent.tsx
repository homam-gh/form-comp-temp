import React from 'react'
import { IRadioData } from "../Models/formModels";
import { throws } from 'assert';

class RadioComponent extends React.Component<IRadioData> {
  constructor(props: IRadioData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  render() {
    const name: string = this.props.name
    const radioValue: string = this.props.value

    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={radioValue}
          onChange={this.onChange}
        />
        <label className="form-check-label">
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default RadioComponent

