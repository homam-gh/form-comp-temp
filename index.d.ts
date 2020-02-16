import * as React from "react";
import { IFormElData, IInputData, IFormProps } from './Form/Models';
export interface InputData extends IInputData {
}
export interface FormElData extends IFormElData {
}
export declare class CathodInput extends React.Component<InputData> {
    render(): JSX.Element;
}
export declare class CathodForm extends React.Component<IFormProps> {
    render(): JSX.Element;
}
