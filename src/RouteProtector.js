import React, { PropTypes } from 'react';  

export function withAuthorization(ComposedComponent) { 
    
  class Authenticate extends React.Component {
    state = {
        isAuthenticated:  true // Hard Coded, use redux to handle props of authenticate
    }

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
    //  const { isAuthenticated, redirect } = this.props;

      if (!this.state.isAuthenticated) {
        console.log("redirect it toooo ......")
      }
    }

    render() {
      return (
        <div>
          { this.state.isAuthenticated ? <ComposedComponent {...this.props} /> : <div>Not an Authenticate User</div> }
        </div>
      );
    }
  }

  return Authenticate;
}