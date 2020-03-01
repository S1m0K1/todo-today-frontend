import React from 'react';

class Task extends React.Component {

    taskDoneClicked = () => {
        // alert(`You completed task! ${this.props.item.id}`);
        this.props.doneTaskFunction(this.props.item.tasId);
    }

    render() {
        let description;

    if (this.props.item.completed) {
      description = <div className="done-task"> {this.props.item.description} </div>;
    } 
     else {
      description = <div> {this.props.item.description} </div>;
    }

        return (
            <div onClick={this.taskDoneClicked}>
                {description}
                <hr />
                <hr />
            </div>
        );
    }
}

export default Task;