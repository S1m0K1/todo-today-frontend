import React from 'react';
// import ToDoFooter from './todo-components/ToDoFooter';

class ToDoToday extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-6 today-list">
                <ul className="tasks-list">
                    <li>Double-click todos to edit.</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }}/>
                    <li style={{ textDecorationLine: "line-through", paddingTop: "25px" }}>
                        Click todos to mark as done.
                            </li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }}/>
                    <li >Drag todos to the top or bottom of the list, or to the next column.</li>
                    <hr style={{borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }}/>
                    <button class="pencil-btn" type="button" name="add a new todo">
                            &#9998;
                            </button>
                </ul>
                
                {/* <ToDoFooter /> */}
            </div>
        );
    }
}

export default ToDoToday;
