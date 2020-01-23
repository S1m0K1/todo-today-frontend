import React from 'react';

class ToDoYesterday extends React.Component {
    render() {
        return (
            <div className="col-md-3 left d-none d-md-block yesterdayList">
                <ul className="done-list">
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "grey", width: "100%" }}/>
                    <li>Undone todos move to today's todo list.</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "grey", width: "100%" }}/>
                </ul>
            </div>
        );
    }
}

export default ToDoYesterday;  
