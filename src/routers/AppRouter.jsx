import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Grax } from '../components/gracias/Grax';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/login" component = { LoginScreen } />

                    <Route path="/" component = { Grax } />
                </Switch>
            </>                        
        </Router>
    )
};
