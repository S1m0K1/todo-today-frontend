import React from 'react';
// import AddTaskButton from './AddTaskButton';
// import AddTask from './AddTask'
import Task from './Task'
import './TodayList.css'

class TodayList extends React.Component {
    pencilClicked = () => {
        alert("Add a new task!");
        // Add task input will appear when clicked
    }

    taskInputUpdated = () => {
        alert("You typed in a new task!");
        // A new task will be added to today's list
    }

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todayItems.map(
                        (toDo) => <Task item={toDo} />
                    )
                }
                <div>
                    <input type="button" className="btn pencil-btn" value="&#9998;" onClick={this.pencilClicked} />
                </div>
                <div>
                    <input type="text" className="new-task" onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.taskInputUpdated()
                        }
                    }}>
                    </input>
                </div>
                {/* <AddTaskButton /> */}
                {/* <AddTask /> */}
            </div>

        );
    }
}

export default TodayList;
