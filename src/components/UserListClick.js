import React, { Component } from 'react';

class UserListClick extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [유저리스트의 값을 불러온 데이터들 정보],
            selectedID : ''
        }
        this.handleListClick = this.handleListClick.bind(this)

        handleListClick(e) {
            this.setState({ selectedID: e.target.value})
        }

        handleMenuClick(selectedID){
            if(selectedID === this.state.users.name){
                //User의 컴포넌트에 Id값 전해주기 ...?..ㅠㅠ 이건 render에 줘야할 거 같은데 
            }
        }

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default UserListClick;