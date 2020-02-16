import React from 'react';
import { IInputData } from './Models';
export default class InputComponent extends React.Component<IInputData> {
    constructor(props: IInputData);
    onChange(e: React.FormEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
