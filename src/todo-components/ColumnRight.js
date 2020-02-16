import React from 'react';
import TomorrowDate from './TomorrowDate';
import TomorrowList from './TomorrowList'

class ColumnRight extends React.Component {

    state = {
        tasks: [
          { id: 7, description: "Undone todo's will move to tomorrow.", completed: false },
          { id: 8, description: "Move todo's to tomorrow's list.", completed: false },
          { id: 9, description: "Drag undone todos to today's or tommorrow's list.", completed: false },
          { id: 10, description: "Click todos to mark as done.", completed: true },
        ]
    }

    render() {
        return (
            <div className="col-md-3 tomorrow d-none d-md-block">
                <TomorrowDate />
                <TomorrowList tomorrowItems={this.state.tasks} />
            </div>
        );
    }
}

export default ColumnRight;