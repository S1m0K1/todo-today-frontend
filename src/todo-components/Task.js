import React from 'react';


class Task extends React.Component {

    render() {
        return (
            <div className="task-item">
                {this.props.item.description}
                <hr />
                <hr />
            </div>
        );
    }
}

export default Task;