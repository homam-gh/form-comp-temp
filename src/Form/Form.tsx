import * as React from "react";
import { IFormElData, ICustomFormChildren, IFormState, IFormProps } from "./Models"

export default class FormComp extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props)
    this.state = { FormData: this.props.FormData }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      FormData: this.props.FormData
    })
  }

  handleInputChange(inputData: IFormElData) {
    const tmpFormData: any = { ...this.state.FormData }
    tmpFormData[inputData.name] = inputData.value

    this.setState({
      FormData: tmpFormData
    })
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
          return <React.Fragment key={index}>{child}</React.Fragment>;
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
        return <React.Fragment key={index}>{child}</React.Fragment>;
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