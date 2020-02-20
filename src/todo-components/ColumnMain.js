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
    // Task will be marked as done when this function executes:
    doneTask = (taskId) => {
        // alert(`You want to delete ${taskId} from state`)

        // First find the task that needs to be updated
        const doneTasks = this.state.tasks; // Array of tasks
        for (let i = 0; i < doneTasks.length; i++) {
            const task = doneTasks[i];
            // console.log(task.description);

            if (task.id === taskId)
                // Update a property on the identified task
                task.completed = true;
            break;
        }
    
    // Update state to reflect changes made to the task
    this.setState({
        tasks: doneTasks
    });
}

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