import React from 'react';



class YesterdayList extends React.Component {

    state = {
        tasks: [
          { id: 1, description: "Yesterday's todo's are marked done!", completed: true },
          { id: 2, description: "Undone todos move to today's todo list.", completed: false },
          { id: 3, description: "Drag undone todos to today's todo list, or to another day.", completed: false },
        ]
    }

    render() {
        return (
            <div className="done-list">
                <p style={{ textDecorationLine: 'line-through', color: 'grey' }}>Yesterday's todo's are marked done!</p>
                <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: 'grey', width: '100%' }} />
                <p style={{ color: 'grey' }}>Undone todos move to today's todo list.</p>
                <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: 'grey', width: '100%' }} />
            </div>
        );
    }
}

export default YesterdayList;
