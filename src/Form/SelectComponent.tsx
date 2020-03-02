import React, { Component, JSXElementConstructor } from 'react'
import { ISelectData, ISelectOption } from "./Models";


class SelectComponent extends React.Component<ISelectData> {
  constructor(props: ISelectData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  populateOptions(options: ISelectOption[]) {
    const derivedOprions = options.map(({ value, label }) => {
      return (
        <option key={value} value={value}>{label}</option>
      )
    })

    return derivedOprions
  }

  render() {
    const value: string | undefined = this.props.value
    const name: string = this.props.name
    const options = this.populateOptions(this.props.options)

    return (
      <fieldset>
        <label>
          {this.props.label}
          <select
            name={name}
            value={value}
            onChange={this.onChange}
          >
            {options}
          </select>
        </label>
      </fieldset>
    )
  }
}

export default SelectComponent

