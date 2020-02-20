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
            { id: uuidv4(), description: "Double-click todos to edit.", category: "today", completed: false },
            { id: uuidv4(), description: "Click todos to mark as done.", category: "today", completed: true },
            { id: uuidv4(), description: "Drag todos to the top or bottom of the list, or to the next day.", category: "today", completed: false },
        ]
    }
    // Adding a task:
    // Define the task being added
    addTask = (taskDescription, taskCategory) => {
        const taskToAdd = { id: uuidv4(), description: taskDescription, category: "today", completed: false };

        // Get the current list of tasks from state
        const newTasks = this.state.tasks;

        // Add taskToAdd to the array of tasks in state
        newTasks.push(taskToAdd);

        // Update the state
        this.setState({
            tasks: newTasks
        });
    }

    // Marking tasks as done
    doneTask = (taskId) => {
        alert(`You want to delete ${taskId} from state`)
    }

    // Task will be marked as done when this function executes:
    // Get the current list of tasks from state
    // const tasks = this.state.tasks;

    // Identify task that matches given task id and mark it as done
    // Add a style-change to the done task = strikethrough
    // const doneTask = tasks.filter(item => item.id !== taskId);


    render() {
        return (
            <div className="col-12 col-md-6 today">
                <TodayDate />
                <TodayList todayItems={this.state.tasks} doneTaskFunction={this.doneTask} />
                <AddTaskButton />
                <AddTaskInput addTaskFunction={this.addTask} />
                <Footer />
            </div>

        );
    }
}

export default ColumnMain;