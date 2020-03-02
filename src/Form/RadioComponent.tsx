import React, { Component } from 'react'
import { IRadioData } from "./Models";

class RadioComponent extends React.Component<IRadioData> {
  constructor(props: IRadioData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.currentTarget.value
    })
  }

  render() {
    const name: string = this.props.name
    const radioValue: string = this.props.value

    return (
      <fieldset>
        <label>
          {this.props.label}
          <input
            type="radio"
            name={name}
            value={radioValue}
            onChange={this.onChange}
          />
        </label>
      </fieldset>
    )
  }
}

export default RadioComponent

