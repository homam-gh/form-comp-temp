import React, { Component, FormEvent } from 'react'
import FormContext from '../Contexts/NewFormContext'

type FormElementVal = string | string[] | number | undefined

interface FormElementData {
    name: string
    value: FormElementVal
    validationMessage?: string | undefined
    showMessage: boolean
}

interface IProps<T> extends React.FormHTMLAttributes<T> {
    onChange?: () => void
    onReset?: () => void
    formData: {
        [elemntNameAttr: string]: FormElementData
    }
}

interface IState {
    formData: {
        [elemntNameAttr: string]: FormElementData
    }
    formIsValid: boolean
}

class NewForm extends React.Component<IProps<{}>, IState> {
    state: IState = {
        formData: {},
        formIsValid: false
    }

    constructor(props: IProps<{}>) {
        super(props)
        this.state = {
            formData: this.props.formData,
            formIsValid: false
        }
    }

    render() {
        return (
            <FormContext.Provider value={{ state: this.state }}>
                <form {...this.props}>
                    {this.props.children}
                </form >
            </FormContext.Provider>
        )
    }
}

export default NewForm