import React from 'react';

export default class TodoItems extends React.Component {
    constructor (props) {
        super(props)
    }

    removeTodoList(id){
        this.props.removeId(id);
    }

    render () {
        return (
            <div>
                <button onClick={(e) => {this.removeTodoList(this.props.todo.id)}}>Remove</button> {this.props.todo.value}
            </div>
        )
    }
}