import React from "react";
import './AddTaskButton.css'

class AddTaskButton extends React.Component {
    pencilClicked = () => {
        alert("Add a new task!");
        // When pencil is clicked AddTaskInput will appear
    }

    render() {
        return (
            <input type="button" className="btn pencil-btn" value="&#9998;" onClick={this.pencilClicked} />
        );
    }
}

export default AddTaskButton;