import React from 'react'

interface inputData {
  name: string,
  label: string,
  value?: string,
  type?: string,
  onChange?(e: any): void
}

class InputComponent extends React.Component<inputData> {
  constructor(props: inputData) {
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
    const value: string | undefined = this.props.value
    const name: string = this.props.name
    const type: string = this.props.type ? this.props.type : "text"

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

