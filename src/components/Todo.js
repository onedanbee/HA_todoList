import React, {Component} from 'react';
import TodoList from "./TodoList";


class Todo extends Component{
    render(){
      return(
        <div>
          {this.props.todo.map(todoData => <TodoList todoData={todoData} key={todoData.id}/>)}
        </div>
      );
    }
  }

export default Todo;