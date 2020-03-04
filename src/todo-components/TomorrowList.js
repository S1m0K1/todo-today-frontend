import React from 'react';
import Task from './Task'
import './TomorrowList.css'

class TomorrowList extends React.Component {
    render() {
        return (
            <div className="do-tomorrow-list">
                {
                    this.props.tomorrowItems.map(doTomorrowItem => (
                        <Task
                            key={doTomorrowItem.taskId}
                            item={doTomorrowItem} />
                    ))}
            </div>
        );
    }
}

export default TomorrowList;