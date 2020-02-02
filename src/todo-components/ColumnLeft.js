import React from 'react';
import YesterdayDate from './YesterdayDate';
import YesterdayList from './YesterdayList'

class ColumnLeft extends React.Component {

    state = {
        tasks: [
            { id: 1, description: "Yesterday's todo's are marked done!", completed: true },
            { id: 2, description: "Undone todos move to today's todo list.", completed: false },
            { id: 3, description: "Drag undone todos to today's todo list, or to another day.", completed: false },
        ]
    }
    
    render() {
        return (
            <div className="col-md-3 yesterday d-none d-md-block">
                <YesterdayDate />
                <YesterdayList yesterdayItems={this.state.tasks} />
            </div>
        );
    }
}

export default ColumnLeft;