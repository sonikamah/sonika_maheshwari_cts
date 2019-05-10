import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { PearsonUsers } from "./PearsonUsers";
import {withAuthorization} from './RouteProtector.js'
import {PrivateRoute} from './component/PrivateRoute.js'
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Login from "./component/Login";
import CounterContainer from "./component/CounterPage";

export const App = () => (
  <Router>
    <div>
      <Header />

      <Route path="/home" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={CounterContainer} />


      <Route path='/users' component={withAuthorization(PearsonUsers)}/>

      <PrivateRoute path="/login-users" component={PearsonUsers} />
    </div>
  </Router>
);
