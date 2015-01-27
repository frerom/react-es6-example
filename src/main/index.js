import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import './style.css'

let Main = React.createClass({
    render() {
        return (
            <div>
                <h1>Todo!</h1>
                <TodoList todos={this.state.todos} onChange={this.onChange}/>
                <AddTodo add={this.addTodo}/>
                <button onClick={this.removeFinishedTodos}>Remove finished todos</button>
            </div>
        )
    },
    getInitialState() {
        return {
            todos: [
                { text: 'Buy milk!', done: false },
                { text: 'Watch TV', done: true }
            ]
        }
    },
    addTodo(todo) {
        let todos = this.state.todos
        todos.push({ text: todo, done: false})
        this.setState({ todos })
    },
    removeFinishedTodos() {
        let todos = this.state.todos.filter(todo => !todo.done)
        this.setState({ todos })
    },
    onChange(todo, done) {
        let todos = this.state.todos
        todos.filter(t => t.text === todo).map(t => t.done = done)
        this.setState({ todos })
    }
})

export default Main