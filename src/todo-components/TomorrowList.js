import React from 'react';

class TomorrowList extends React.Component {

    state = {
        tasks: [
          { id: 7, description: "Today's undone todo's will move to tomorrow.", completed: false },
          { id: 8, description: "Move upcoming and future todo's to tomorrow's list.", completed: false },
          { id: 9, description: "Drag undone todos to today's todo list, or tommorrow's list.", completed: false },
          { id: 10, description: "Click todos to mark as done.", completed: true },
        ]
    }

    render() {
        return (
            <div className="do-tomorrow-list">
                    <p style={{ color: '#1e836c;' }}>Today's undone todo's will move to tomorrow.</p>
                    <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: '#1e836c', width: '100%' }} />
                    <p style={{ color: '#1e836c;' }}>Move upcoming and future todo's to tomorrow's list.</p>
                    <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: '#1e836c', width: '100%' }} />
                </div>
        );
    }
}

export default TomorrowList;