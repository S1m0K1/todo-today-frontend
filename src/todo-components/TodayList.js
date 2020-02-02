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
                <AddTaskButton />
                <AddTask />
            </div>
            
        );
    }
}

export default TodayList;
