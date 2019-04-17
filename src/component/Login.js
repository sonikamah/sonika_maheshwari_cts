import React from "react";
import {
    Redirect
  } from "react-router-dom";

import "./../css/login.css";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

export default class Login extends React.Component {

    state = { redirectToReferrer: false };
  
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    };
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/users" } };
      let { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) return <Redirect to={from} />;
  
      return (
        <div>
            <br/>
            Username: <input type="text" name="user" />
            Password: <input type="password" name="password" />
            <button className="logincss" onClick={this.login}>Login</button>
            
        </div>
      );
    }
  }