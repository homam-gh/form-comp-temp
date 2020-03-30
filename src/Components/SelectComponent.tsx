import React from 'react'

interface selectData {
  name: string,
  label: string,
  value?: string,
  placeholder: string,
  options: selectOption[],
  onChange?(e: any): void
}

interface selectOption {
  value: string,
  label: string
}

class SelectComponent extends React.Component<selectData> {
  constructor(props: selectData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  populateOptions(options: selectOption[]) {
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
    const value: string | undefined = this.props.value
    const name: string = this.props.name
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

