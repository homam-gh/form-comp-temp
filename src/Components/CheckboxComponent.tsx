import React from 'react'
import { ICheckboxData } from "../Models/formModels"

class CheckboxComponent extends React.Component<ICheckboxData> {
  constructor(props: ICheckboxData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  // TODO: this any should be replaced
  onChange(e: any) {
    this.props.onChange && this.props.onChange({
      name: this.props.name,
      checked: e.target.checked
    })
  }

  render() {
    const name = this.props.name
    const checked = this.props.value

    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name={name} checked={checked} onChange={this.onChange} />
        <label className="form-check-label">
          {this.props.label}
        </label>
      </div>

    )
  }
}

export default CheckboxComponent

