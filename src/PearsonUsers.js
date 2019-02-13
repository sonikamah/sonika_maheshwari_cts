import React, { Component } from "react";
import Cards from './Cards'

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.deleteUser=this.deleteUser.bind(this)
    this.fetchDataFromServer=this.fetchDataFromServer.bind(this)

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  async fetchDataFromServer() {
      const response = await fetch("https://reqres.in/api/users?page=1&per_page=10");
      return await response.json();
  }

  async componentDidMount() {
    const fetchdata = await this.fetchDataFromServer();
    var UUL = this.state.users && this.state.users.concat(fetchdata.data) || [];

    // remove duplicate users from the state
    this.removeDuplicateUser(UUL);
  }

  removeDuplicateUser = (updatedUserList = []) => {
    let uniq = {};
    updatedUserList = updatedUserList.length && updatedUserList.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
    
    this.setState({
      users: updatedUserList
    });
  }

  deleteUser = (userId) => {
    console.log("removeUserFromList.....", userId)
    var filterUser = this.state.users.filter((user) => {
      return user.id.toString() !== userId
    });

    this.setState({
      users: filterUser
    });
  }

  render() {
    return (
      <div className="pearon-users">
        <div className="pearson-user-mgmt"><h1>Pearson User Management</h1></div>
        <div className="cards">
        <Cards users={this.state.users} deleteUser={this.deleteUser}/>
        </div>
      </div>
    );
  }
}
