import React from 'react';

class ToDoYesterday extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <ul className="done-list">
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!
                            </li>
                    <hr />
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!
                            </li>
                    <hr />
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!
                            </li>
                    <hr />
                    <li>Undone todos move to today's todo list.</li>
                    <hr />
                </ul>
            </div>
        );
    }
}

export default ToDoYesterday;  
