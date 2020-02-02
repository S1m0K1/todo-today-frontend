import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div>
                {this.props.item.description}
                <hr />
                <hr />
            </div>
        );
    }
}

export default Task;