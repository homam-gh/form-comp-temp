import React, {Component} from "react"

interface IProps {}

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {hasError: false}

    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true}
    }

    componentDidCatch(error: any, errorInfo: any) {
// logErrorToMyService(error,errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1> something went wrong</h1>
        }

        return this.props.children
    }
}