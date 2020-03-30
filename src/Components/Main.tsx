import React, {Component} from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import {routes} from "../Constants/Routs"
import {CinemaList} from "./UserComponents/CinemaList"
import {Unavailable} from "./Unavailable"
import {NewCinema} from "./UserComponents/NewCinema"
import {Header} from "./Header"
import {Container} from "react-bootstrap"
import {Amphitheatre} from "./UserComponents/Amphitheatre"
import {CustomForm} from './UserComponents/FormTestPage'

interface IProps {}

interface IState {}

export class Main extends Component<IProps, IState> {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route path={routes.CINEMAS} exact component={CinemaList}/>
                            <Route path={routes.CINEMA} component={NewCinema}/>
                            <Route path={routes.NEW_CINEMA} component={NewCinema}/>
                            <Route path={routes.NEW_AMPHITHEATRE} component={Amphitheatre}/>
                            <Route path={routes.FORM} component={CustomForm}/>
                            <Route name="unavailable" component={Unavailable}/>
                        </Switch>
                    </BrowserRouter>
                </Container>
            </div>
        )
    }
}