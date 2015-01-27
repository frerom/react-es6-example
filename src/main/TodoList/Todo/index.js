import React from 'react'

let Todo = React.createClass({
    render() {
        return (
            <li>
                <input type="checkbox" onChange={this.onChange} checked={this.props.done}/>
                {this.props.text}
            </li>
        )
    },
    onChange(e) {
        this.props.onChange(this.props.text, e.target.checked)
    }
})

export default Todo