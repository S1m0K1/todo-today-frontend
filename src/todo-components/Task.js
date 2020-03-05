import React from 'react';

class Task extends React.Component {

    // Click on an item to mark as done
    taskClicked = () => {
        // alert(`You completed task ${this.props.item.taskId}`);
        this.props.doneTaskProp(this.props.item.taskId);
    } 

    // // Click on an item marked as done to delete it
    // taskDoneClicked = () => {
    //     // alert(`You deleted task ${this.props.item.taskId}`);
    //     this.props.deleteTaskProp(this.props.item.taskId);
    // }

    render() {
        let description;
    if (this.props.item.completed) {
      description = <div className="done-task"> {this.props.item.description} </div>;
    } 
     else {
      description = <div> {this.props.item.description} </div>;
    }
        return (
            // <div onClick={this.taskDoneClicked}>
            <div onClick={this.taskClicked}>
                {description}
                <hr />
                <hr />
            </div>
        );
    }
}

export default Task;