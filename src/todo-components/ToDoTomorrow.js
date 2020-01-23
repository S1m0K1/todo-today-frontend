import React from 'react';

class ToDoTomorrow extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <ul className="do-tomorrow-list">
                    <li>Add upcoming and future todo's.</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "#1e836c", width: "100%" }}/>
                    <li>Yesterday and today's undone todo's move over to tomorrow.</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "#1e836c", width: "100%" }} />
                </ul>
            </div>
        );
    }
}

export default ToDoTomorrow;