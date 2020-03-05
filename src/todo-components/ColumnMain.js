import React from 'react';
import TodayDate from './TodayDate';
import TodayList from './TodayList';
import AddTaskButton from './AddTaskButton';
import AddTaskInput from './AddTaskInput';
import Footer from './Footer';
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
    addTask = (taskDescription, taskCategory) => {

        // Define the task that is being added by POST request 
        const taskToAdd = {
            description: taskDescription,
            category: "Today",
            completed: 0,
            userId: 1
        }

        axios.post('https://a7nqp1d856.execute-api.eu-west-2.amazonaws.com/dev/tasks', taskToAdd)
            .then((response) => {
                // Get the new task id from where it was generated in the backend
                // Set it as a property on defined JSON object taskToAdd
                taskToAdd.taskId = response.data.task.taskId;

                // Get the current list of tasks from state
                const newTasks = this.state.tasks;

                // Add taskToAdd to the array of tasks in state
                newTasks.push(taskToAdd);

                // Update the state
                this.setState({
                    tasks: newTasks
                });
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    }

    // Marking tasks as done
    // Task will be marked as done when this function executes:
    doneTask = (taskId) => {
        alert(`You want to mark ${taskId} as done!`);

        // // Find the task that needs to be updated
        // const doneTask = this.state.tasks; // Array of tasks
        // for (let i = 0; i < doneTask.length; i++) {
        //     const task = doneTask[i];
        //     // console.log(task.description);

        //     if (task.taskId === taskId)
        //         // Update a property on the identified task
        //         task.completed = true;
        //     break;
        // }
        // console.log(doneTask);

        // // Update state to reflect changes made to the task
        // this.setState({
        //     tasks: doneTask
        // });
    }

    // Deleting tasks
    // Click on an done item to delete it
    // Tasks will be deleted when this function executes
    // deleteTask = (taskId) => {
    //     // alert(`You deleted ${doneTasks}`)

    //     // Get list of doneTasks
    //     let tasks = this.state.tasks;

    //     axios.delete(`https://a7nqp1d856.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
    //         .then((response) => {
    //             // Identify the done task that matches the given taskId and remove it
    //             let updatedTasks = tasks.filter(item => item.taskId !== taskId);

    //             // Update state with new collection of tasks i.e. without one we've deleted
    //             this.setState({
    //                 tasks: updatedTasks
    //             });
    //         })
    //         .catch((error) => {
    //             // Handle error
    //             console.error(error);
    //         });
    // };

    render() {
        return (
            <div className="col-12 col-md-6 today">
                <TodayDate />
                <TodayList
                    todayItems={this.state.tasks}
                    doneTaskProp={this.doneTask}
                    deleteTaskProp={this.deleteTask} />
                <AddTaskButton />
                {/* {this.props.pencilClicked && ( */}
                <AddTaskInput addTaskProp={this.addTask} />
                {/* )} */}
                <Footer />
            </div>

        )
    };
}

export default ColumnMain;