import React from 'react';
import AddTask from './AddTask';
import ToDoFooter from './ToDoFooter';
import TodayDate from './TodayDate';

class ToDoToday extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <TodayDate />
                        <ul className="tasks-list">
                            <li>Double-click todos to edit.</li>
                            <hr />
                            <li style={{ textDecorationLine: "line-through", paddingTop: "25px" }}>
                                Click todos to mark as done.
                            </li>
                            <hr />
                            <li >Drag todos to the top or bottom of the list, or to the next column.</li>
                            <hr />
                            <li>
                                <AddTask />
                            </li>
                        </ul>
                   
                    <ToDoFooter />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ToDoToday;
