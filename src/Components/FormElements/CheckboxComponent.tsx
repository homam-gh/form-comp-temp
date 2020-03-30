import React, { Component } from 'react'
import { IFormElData, ICustomFormChildren, ICheckboxData } from "./formModels";

class CheckboxComponent extends React.Component<ICheckboxData> {
  constructor(props: ICheckboxData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      checked: e.target.checked
    })
  }

  render() {
    const name: string = this.props.name
    const checked: any = this.props.value

    return (
      <fieldset>
        <label>
          {this.props.label}
          <input type="checkbox" name={name} checked={checked} onChange={this.onChange} />
        </label>
      </fieldset>
    )
  }
}

export default CheckboxComponent

