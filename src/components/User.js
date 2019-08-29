import React, { Component } from 'react';
import UserList from "./UserList";


class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.userData.username}</li>
          <li>{this.props.userData.name}</li>
          <li>{this.props.userData.email}</li>
          <li>{this.props.userData.phone}</li>
          <img src={`https://randomuser.me/api/portraits/men/${this.props.userData.id}.jpg`} />
        </ul>
      </div>
    );
  }
}

export default User;