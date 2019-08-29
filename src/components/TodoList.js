import React, {Component} from 'react';



class TodoList extends Component{
    render(){
      return(
        <div>
          <ul>
            <li>{this.props.todoData.id}</li>
            <li>{this.props.todoData.title}</li>
          </ul>
        </div>
      );
    }
  }

export default TodoList;