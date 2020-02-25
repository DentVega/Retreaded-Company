import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "../containers/splash/Splash";
import SignUp from "../containers/signup/Signup";
import Login from "../containers/login/Login";
import Home from "../containers/home/Home";
import NotFound from "../containers/notFound/NotFound";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route exact path='/' component={Splash}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='login' component={Login}/>
                        <Route exact path='signUp' component={SignUp}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Routes;
