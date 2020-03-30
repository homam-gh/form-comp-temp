import React from "react";
import { Component, Fragment } from "react";
import { IFormElData, ICustomFormChildren, IFormState, IFormProps } from "../Models/formModels";

interface IState extends IFormState { }

interface IProps extends IFormProps { }

class CustomFormComp extends Component<IProps, IState> {
	state = {
		FormData: {}
	};

	constructor(props: IProps) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state.FormData = this.props.FormData;
	}

	componentDidMount() {
		this.setState({
			FormData: this.props.FormData
		});
	}

	handleInputChange(inputData: IFormElData) {
		const newFormData: any = { ...this.state.FormData };
		newFormData[inputData.name] = inputData.value;

		this.setState({
			FormData: newFormData
		});
	}

	handleSubmit(event: React.FormEvent) {
		event.preventDefault();
	}

	recursiveClone(children: ICustomFormChildren): ICustomFormChildren {
		return children.map((child, index: number) => {
			let value: string;

			if (React.isValidElement(child)) {
				if (
					child.props &&
					this.state.FormData &&
					(this.state.FormData as any)[child.props.name]
				) {
					value = (this.state.FormData as any)[child.props.name];

					return React.cloneElement(child, {
						onChange: this.handleInputChange.bind(this),
						key: index,
						value: value
					});
				} else if (!child.props || !Object.keys(child.props).length) {
					return <Fragment key={index}>{child}</Fragment>;
				} else {
					if (!Array.isArray(child.props.children)) {
						return React.cloneElement(
							child,
							{ key: index },
							this.recursiveClone([child.props.children])
						);
					}
					return React.cloneElement(
						child,
						{ key: index },
						this.recursiveClone(child.props.children)
					);
				}
			} else {
				return <Fragment key={index}>{child}</Fragment>;
			}
		});
	}

	render() {
		const newChildren = this.recursiveClone(this.props.children);

		return (
			<form style={{ direction: "ltr" }} onSubmit={this.handleSubmit}>
				{newChildren}
			</form>
		);
	}
}

export default CustomFormComp;
