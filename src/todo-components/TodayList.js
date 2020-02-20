import React from 'react';
import Task from './Task'
import './TodayList.css'

class TodayList extends React.Component {

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todayItems.map(
                        (toDo) => <Task key={toDo.id} item={toDo} />
                    )
                }
            </div>

        );
    }
}

export default TodayList;
