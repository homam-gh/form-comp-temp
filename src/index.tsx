import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from "./Constants/Routs"
import { CustomForm1 } from './pages/FormTestPage1'
import "./style.scss"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.HOME} component={CustomForm1} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
