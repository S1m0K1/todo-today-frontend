import React from 'react';
import TodayDate from './TodayDate';
import TodayList from './TodayList';
import AddTaskButton from './AddTaskButton';
import AddTaskInput from './AddTaskInput';
import Footer from './Footer'
import uuidv4 from 'uuid/v4';

class ColumnMain extends React.Component {

    state = {
        tasks: [
            { id: uuidv4(), description: "Double-click todos to edit.", completed: false },
            { id: uuidv4(), description: "Click todos to mark as done.", completed: true },
            { id: uuidv4(), description: "Drag todos to the top or bottom of the list, or to the next day.", completed: false },
        ]
    }
    // Adding a task:
    // Define the task being added
    addTask = (taskDescription, taskCategory) => {
        const taskToAdd = { id: uuidv4(), description: taskDescription, completed: false };

    // Get the current list of tasks from state
        const newTasks = this.state.tasks;

    // Add taskToAdd to the array of tasks in state
        newTasks.push(taskToAdd);

    // Update the state
        this.setState({
            tasks: newTasks
        });
}

    render() {
        return (
            <div className="col-12 col-md-6 today">
                <TodayDate />
                <TodayList todayItems={this.state.tasks} />
                <AddTaskButton />
                <AddTaskInput addTaskFunction={this.addTask} />
                <Footer />
            </div>

        );
    }
}

export default ColumnMain;