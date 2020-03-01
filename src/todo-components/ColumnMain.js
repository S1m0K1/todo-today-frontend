import React from 'react';
import TodayDate from './TodayDate';
import TodayList from './TodayList';
import AddTaskButton from './AddTaskButton';
import AddTaskInput from './AddTaskInput';
import Footer from './Footer'
import uuidv4 from 'uuid/v4';
import axios from 'axios';

class ColumnMain extends React.Component {

    state = {
        tasks: [
        ]
    };

    componentDidMount = () => {
        // Fetch tasks from API
        axios.get('https://a7nqp1d856.execute-api.eu-west-2.amazonaws.com/dev/tasks')
            .then((response) => {
                // Handle success
                this.setState({
                    tasks: response.data.tasks
                })
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    }

    // Adding a task:
    // Define the task being added
    addTask = (taskDescription, taskCategory) => {
        const taskToAdd = { taskId: uuidv4(), description: taskDescription, category: "today", completed: false };

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

            if (task.taskId === taskId)
                // Update a property on the identified task
                task.completed = true;
            break;
        }
        console.log(doneTasks);
    
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
                {/* {this.props.pencilClicked && ( */}
                <AddTaskInput addTaskFunction={this.addTask} />
                {/* )} */}
                <Footer />
            </div>

        );
    }
}

export default ColumnMain;