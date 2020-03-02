import React, { Component } from 'react'
import { ICheckboxData } from "./Models";

class CheckboxComponent extends React.Component<ICheckboxData> {
  constructor(props: ICheckboxData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      checked: e.currentTarget.checked
    })
  }

  render() {
    const name: string = this.props.name
    const checked: any = this.props.value ? true : false

    return (
      <fieldset>
        <label>
          {this.props.label}
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={this.onChange}
          />
        </label>
      </fieldset>
    )
  }
}

export default CheckboxComponent

