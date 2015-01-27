import React from 'react'

let AddTodo = React.createClass({
    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.state.text}/>
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    },
    getInitialState() {
        return { text: '' }
    },
    addTodo() {
        this.props.add(this.state.text)
        this.setState({ text: '' })
    },
    onChange(e) {
        this.setState({ text: e.target.value })
    }
})

export default AddTodo