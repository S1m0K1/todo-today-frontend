import React from 'react';
import TodayDate from './TodayDate';
import TodayList from './TodayList';
import Footer from './Footer'

class ColumnMain extends React.Component {

    state = {
        tasks: [
            { id: 4, description: "Double-click todos to edit.", completed: false },
            { id: 5, description: "Click todos to mark as done.", completed: true },
            { id: 6, description: "Drag todos to the top or bottom of the list, or to the next day.", completed: false },
        ]
    }

    render() {
        return (
            <div className="col-12 col-md-6 today">
                <TodayDate />
                <TodayList todayItems={this.state.tasks} />
                <Footer />
            </div>

        );
    }
}

export default ColumnMain;