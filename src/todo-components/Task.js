import React from 'react';

class Task extends React.Component {

    taskDoneClicked = () => {
        alert('Click to mark as done!')
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