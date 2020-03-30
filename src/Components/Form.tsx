import React from "react"
import { Component, Fragment } from "react"
import { IFormElData, ICustomFormChildren, IFormState, IFormProps } from "../Models/formModels"

interface IState extends IFormState { }

interface IProps extends IFormProps { }

class CustomFormComp extends Component<IProps, IState> {
	state = {
		FormData: {}
	}

	constructor(props: IProps) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state.FormData = this.props.FormData
	}

	componentDidMount() {
		this.setState({
			FormData: this.props.FormData
		})
	}

	handleInputChange(inputData: IFormElData) {
		// TODO: this any should be replaced
		const newFormData: any = { ...this.state.FormData }

		newFormData[inputData.name] = inputData.value

		this.setState({
			FormData: newFormData
		})
	}

	handleSubmit(event: React.FormEvent) {
		event.preventDefault()
		console.log(this.state.FormData)
	}

	recursiveClone(children: ICustomFormChildren): ICustomFormChildren {
		return children.map((child, index: number) => {
			let value: string

			// to check if 1- child is a valid react element or 2- just a text node
			if (React.isValidElement(child)) {
				// to check if 1- child is one the intended form elements from props 2- or it is another empty tag/text node 3- or the child has some children of itself
				if (
					child.props &&
					this.state.FormData &&
					// TODO: this any shoude be replaced
					(this.state.FormData as any)[child.props.name]
				) {
					value = (this.state.FormData as any)[child.props.name]

					return React.cloneElement(child, {
						onChange: this.handleInputChange.bind(this),
						key: index,
						value: value
					})
				} else if (!child.props || !Object.keys(child.props).length) {
					return <Fragment key={index}>{child}</Fragment>
				} else {
					// to check id the child is an array of children or just a child to pass to recursive
					// TODO: if you can find out why this is working, it will be greate!
					if (!Array.isArray(child.props.children)) {
						return React.cloneElement(
							child,
							{ key: index },
							this.recursiveClone([child.props.children])
						)
					}
					return React.cloneElement(
						child,
						{ key: index },
						this.recursiveClone(child.props.children)
					)
				}
			} else {
				return <Fragment key={index}>{child}</Fragment>
			}
		})
	}

	render() {
		const newChildren = this.recursiveClone(this.props.children)

		return (
			<form onSubmit={this.handleSubmit}>
				{newChildren}
			</form>
		)
	}
}

export default CustomFormComp
