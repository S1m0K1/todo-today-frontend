import React from 'react';
import Task from './Task'
import './TodayList.css'

class TodayList extends React.Component {

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todayItems.map(
                        (toDo) => <Task 
                            key={toDo.taskId}
                            item={toDo}
                            doneTaskProp={this.props.doneTaskProp}
                            deleteTaskProp={this.props.deleteTaskProp} />
                    )}
            </div>
        );
    }
}

export default TodayList;
