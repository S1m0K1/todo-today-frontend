import React from 'react';
import AddTaskButton from './AddTaskButton';
import AddTask from './AddTask'

class ToDoToday extends React.Component {
    render() {
        return (
            <div class="todo-list">
                <p>Double-click todos to edit.</p>
                <hr style={{ borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }} />
                <p style={{ textDecorationLine: "line-through" }}>Click todos to mark as done.</p>
                <hr style={{ borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }} />
                <p>Drag todos to the top or bottom of the list, or to the next column.</p>
                <hr style={{ borderWidth: "0.5px", borderStyle: "solid", color: "white", width: "100%" }} />
                <AddTaskButton />
                <AddTask />
            </div>
            
        );
    }
}

export default ToDoToday;
