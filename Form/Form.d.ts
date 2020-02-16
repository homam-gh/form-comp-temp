import * as React from "react";
import { IFormElData, ICustomFormChildren, IFormState, IFormProps } from "./Models";
export default class FormComp extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps);
    componentDidMount(): void;
    handleInputChange(inputData: IFormElData): void;
    handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
    recursiveClone(children: ICustomFormChildren): ICustomFormChildren;
    render(): JSX.Element;
}
