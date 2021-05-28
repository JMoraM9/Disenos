import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { ExamIndic } from '../components/inicio/examenes/ExamIndic';
import { ExamScreen } from '../components/inicio/examenes/ExamScreen';
import { Inicio } from '../components/inicio/Inicio';
import { Loading } from '../components/loading/Loading';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/login/third" component = { LoginScreen } />
                    <Route exact path="/login/second" component = { LoginScreen } />
                    <Route exact path="/load" component = { Loading } />
                    <Route exact path="/inicio"component = { Inicio } />
                    <Route exact path="/test"component = { ExamIndic } />
                    <Route exact path="/login" component = { LoginScreen } />
                    <Route exact path="/test-questions" component = { ExamScreen } />

                    <Route exact path="/" component = { LoginScreen } />
                </Switch>
            </>                        
        </Router>
    )
};
