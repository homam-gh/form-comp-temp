import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from "./Constants/Routs"
import { CustomForm } from './pages/FormTestPage'
import "./style.scss"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.HOME} component={CustomForm} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))
