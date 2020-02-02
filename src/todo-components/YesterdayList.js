import React from 'react';
import Task from './Task'
import './YesterdayList.css'


class YesterdayList extends React.Component {

    render() {
        return (
            <div className="done-list">
                 {
                    this.props.yesterdayItems.map(
                        (doneItem)=><Task item={doneItem} />
                    )
                }
            </div>
        );
    }
}

export default YesterdayList;
