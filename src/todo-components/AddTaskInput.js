import React from "react";

class AddTaskInput extends React.Component { 

    // state = {
    //     taskDescription: "A brand new todo!"
    // }

    addTask = () => {
        this.props.addTaskFunction(this.state.taskDescriptionChanged);
    }

    taskDescriptionChanged = (event) => {
        this.setState({
            taskDescriptionChanged: event.target.value
        });
    }

    render() {
        return (
            <input 
            type="text" 
            className="new-task" 
            onChange={this.taskDescriptionChanged}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    this.addTask()
                }
            }}
            />
        );
    }
}

export default AddTaskInput;