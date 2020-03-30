import React, {Component} from "react"
import {withRouter, RouteComponentProps} from "react-router-dom";

interface IProps {
    /* Parent component's props*/
}

interface IState {}

class Login extends Component<IProps, IState> {

    render() {
        // this.props.history.replace(`/cinemas`)
        return (
            <div>
                login
            </div>
        )
    }
}

export default Login