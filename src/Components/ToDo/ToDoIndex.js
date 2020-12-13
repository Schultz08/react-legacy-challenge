import React, { Component } from "react"
import { Container, Button, Input } from "reactstrap"
import TaskList from "./TaskList"

export default class ToDoIndex extends Component {

    state = {
        task: [],
    }

    addTask = (task) =>{
        this.setState({task: [task, ...this.state.task]})
    }

    toggleComplete = (id) => {
        this.setState({task: this.state.task.map(task => {
            if(task.id === id )
            {
                return {...task, complete: !task.complete}
            }
            else{
                return task
            }
        })})
    }




    render() {
        return (
            <Container className="dark">
                <TaskList onSubmit={this.addTask}/>
                {this.state.task.map((task, index) => 
                <div 
                onClick={() => this.toggleComplete(task.id)}
                key={index} style={{
                    textDecoration: task.complete ? "line-through" : ""
                }}>
                {task.task}</div>)}
            </Container>
        )
    }
}