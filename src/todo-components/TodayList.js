import React from 'react';
import AddTaskButton from './AddTaskButton';
import AddTask from './AddTask'
import Task from './Task'
import './TodayList.css'

class TodayList extends React.Component {

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todayItems.map(
                        (toDo)=><Task item={toDo} />
                    )
                }

                {/* <p>Double-click todos to edit.</p>
                <hr />
                <hr />
                <p style={{ textDecorationLine: "line-through" }}>Click todos to mark as done.</p>
                <hr />
                <hr />
                <p>Drag todos to the top or bottom of the list, or to the next day.</p>
                <hr />
                <hr /> */}
                <AddTaskButton />
                <AddTask />
            </div>
            
        );
    }
}

export default TodayList;
