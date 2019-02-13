import React, { Component } from "react";

export default class CardInfo extends Component {

  deleteUser = (e) => {
    this.props.deleteUser(e.currentTarget.id);
  }

  render() {
    var { id, first_name, last_name, avatar } = this.props.userData || {};
    return (
        <div className="card-info-Container">
            <div className="avatar">
              <img src={avatar} alt="avatar" className="avatar-image" height="80" width="80"/>
            </div>
            <div className="first_last"> {first_name} {last_name}</div>
            <button href="#" id={id} onClick={this.deleteUser} className="delete-btn">Delete</button>
        </div>
    );
  }
}
