import React, {Component} from 'react';
import User from "./User";
import Todo from "./Todo"

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          isTodoPage : true 
        }
        this.handleClick = this.handleClick.bind(this) 
      }

      handleClick(isTodoButton){
          const {isTodoPage} = this.state;
          if(isTodoButton!==isTodoPage) {
              this.setState({
                isTodoPage : !isTodoPage
              });
          }
      }
      

    render(){
      return(
          <div>
            <button onClick={()=>this.handleClick(false) }>유저프로필</button>
            <button onClick={()=>this.handleClick(true) }>투두</button>
            {!!this.state.isTodoPage ? <Todo todo ={this.props.todo}/> : <User user ={this.props.user}/>}
          </div>
      );
    }
  }

export default UserPage;