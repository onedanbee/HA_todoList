import React, { Component } from 'react';

class UserList extends Component {
    render() {
        console.log(this.props)
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

export default UserList;