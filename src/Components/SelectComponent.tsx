import React from 'react'
import { SelectOption, SelectData } from '../Models/formModels'

class SelectComponent extends React.Component<SelectData> {
  constructor(props: SelectData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  // TODO: this any should be replaced
  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  populateOptions(options: SelectOption[]) {
    // TODO: think of a way to add first option as a placeholder
    // if (!options || !options.length || options.length == 0) {
    //   return <option selected disabled>{this.props.placeholder}</option>
    // }

    const derivedOprions = options.map(({ value, label }) => {
      return (
        <option key={value} value={value}>{label}</option>
      )
    })

    return derivedOprions
  }

  render() {
    const value = this.props.value
    const name = this.props.name
    const options = this.populateOptions(this.props.options)

    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <select
          name={name}
          value={value}
          onChange={this.onChange}
          className="form-control"
        >
          {options}
        </select>
      </div>
    )
  }
}

export default SelectComponent

