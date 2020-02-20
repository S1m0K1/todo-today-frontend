import React from "react";

class AddTaskInput extends React.Component {
    
    // How do you reset state?!
    
    // initialState = {input:''}
    // state = this.initialState;

    // handleFormReset = () => {
    //     this.setState(() => this.initialState);
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
                        this.addTask();
                        // this.handleFormReset();
                    }
                }}
            />
        );
    }
}

export default AddTaskInput;