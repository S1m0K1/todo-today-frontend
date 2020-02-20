import React from 'react';

class Task extends React.Component {

    taskDoneClicked = () => {
        // alert(`You completed task! ${this.props.item.id}`);
        this.props.doneTaskFunction(this.props.item.id);
    }

    render() {
        return (
            <div onClick={this.taskDoneClicked}>
                {this.props.item.description}
                <hr />
                <hr />
            </div>
        );
    }
}

export default Task;