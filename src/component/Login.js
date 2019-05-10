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
        <div className="container">
          <div className="header"> Login Form</div>
          <div className="loginBody">
            <div className="loginTable">
              <table>
                <tr><td className="td-right">UserName: </td> <td> <input type="text" /></td></tr>
                <tr><td> Password: </td> <td> <input type="password" /></td></tr>
              </table>
              <button className="btn"  onSubmit="">Submit</button>
            </div>
          </div>
          <div className="footer"> FOOTER </div>
        </div>
      );
    }
  }