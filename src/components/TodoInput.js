import React from 'react';
import TodoItems from './TodoItems'; 


export default class TodoInput extends React.Component {
    constructor (props) {
        super(props)

        this.addTodo = this.addTodo.bind(this);
        this.removeId = this.removeId.bind(this);
        this.todoText = "";
        this.state = {
            todos: [
                {id: 0, value: "Prakash R"},
                {id: 1, value: "koushika"},
            ],
            nextId: 3
        }
    }

    onHandleChange (e) {        
        this.todoText = e.target.value;
    }

    addTodo(todo){      
        if(this.todoText !== ""){
            var todoList = todo.todos;
            var nextId = todo.nextId;
            todoList.push({id: nextId++, value: this.todoText});

            this.setState({
                todos: todoList,
                nextId: nextId
            })
            console.log("Click", this.state);
            this.todoText = "";
        }
    }

    removeId(id){
        console.log("Remove Element :: ", id);
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.value}  onChange={this.onHandleChange.bind(this)} />
                <button onClick={() => this.addTodo(this.state)}> Sumbit </button>
                <ul>
                    {
                        this.state.todos.map((todo) => {
                           return <TodoItems todo={todo} key={todo.id} removeId={this.removeId}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}