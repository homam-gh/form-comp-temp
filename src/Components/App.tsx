import React from 'react';
import {Provider} from "react-redux";
import {routes} from "../Constants/Routs"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./Login"
import {Main} from "./Main"
import {Store, persistor} from "../Redux/Store/Store"
import {PersistGate} from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={Store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <BrowserRouter>
                    <Switch>
                        <Route name="login" path={routes.HOME} exact component={Login}/>
                        <Route name="login" path={routes.LOGIN} exact component={Login}/>
                        <Route component={Main}/>
                    </Switch>
                </BrowserRouter>
            {/* </PersistGate> */}
        </Provider>
    );
}

export {App}