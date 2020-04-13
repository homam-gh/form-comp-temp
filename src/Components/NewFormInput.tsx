import React from 'react'

interface IProps<T> extends React.InputHTMLAttributes<T> {
    label: string
}

class InputComponent extends React.Component<IProps<any>> {
    render() {
        const className = this.props.className + 'form-control'

        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input {...this.props} className={className} />
            </div>
        )
    }
}

export default InputComponent

