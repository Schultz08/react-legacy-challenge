import React from "react"


class TaskList extends React.Component{
    state = {
        task:""
    }

    handleChange = (event) =>{
        this.setState({task: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({
            id: Math.trunc(Math.random() * 10000),
            task: this.state.task,
            complete: false
        });
        this.setState({task: ""})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

            <input value={this.state.task} onChange={this.handleChange} placeholder="Task Name"/>
            </form>
        )
    }
}


export default TaskList;