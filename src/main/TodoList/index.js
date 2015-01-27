import React from 'react'
import './style.css'
import Todo from './Todo'

let TodoList = React.createClass({
    render() {
        var todos = this.props.todos.map((todo, i) => <Todo text={todo.text} done={todo.done} onChange={this.props.onChange} key={i}/>)
        return (
            <ul>
                {todos}
            </ul>
        )
    }
})

export default TodoList