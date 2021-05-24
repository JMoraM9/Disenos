import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Inicio } from '../components/inicio/Inicio';
import { Loading } from '../components/loading/Loading';
// import { Grax } from '../components/gracias/Grax';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/login" component = { LoginScreen } />
                    <Route exact path="/login/second" component = { LoginScreen } />
                    <Route exact path="/load" component = { Loading } />
                    <Route exact path="/inicio"component = { Inicio } />
                </Switch>
            </>                        
        </Router>
    )
};
