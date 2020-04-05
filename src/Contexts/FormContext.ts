import React from 'react'

export type FromElementValue = string | string[] | number | undefined

export interface ValidatorResult {
    valid: boolean
    validationText: string | undefined
}

export interface ValidationState extends ValidatorResult {
    validators: string[]
}

export interface IFormStateEntries {
    formValues: {
        [index: string]: FromElementValue
    }
    validationState: {
        [index: string]: ValidationState
    }
    touchState: {
        [index: string]: boolean
    }
    submitOccurred: boolean
}

const FormStateEntries: IFormStateEntries = {
    formValues: {},
    validationState: {},
    touchState: {},
    submitOccurred: false
}
const FormContext = React.createContext(FormStateEntries)

export default FormContext