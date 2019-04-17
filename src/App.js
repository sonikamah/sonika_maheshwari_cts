import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PearsonUsers } from "./PearsonUsers";
import {withAuthorization} from './RouteProtector.js'
import {PrivateRoute} from './component/PrivateRoute.js'
import Header from "./component/Header";
import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";

export const App = () => (
  <Router>
    <div>
      <Header />

      <Route path="/home" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />

      <Route path='/users' component={withAuthorization(PearsonUsers)}/>


      <PrivateRoute path="/login-users" component={PearsonUsers} />
    </div>
  </Router>
);
