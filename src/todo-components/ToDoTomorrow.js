import React from 'react';

class ToDoTomorrow extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="do-tomorrow-list">
                    <li>Add upcoming and future todo's.</li>
                    <hr style={{ color: "#1e836c" }} />
                    <li>Yesterday and today's undone todo's will move across to tomorrow.</li>
                    <hr style={{ color: "#1e836c" }} />
                </ul>
            </div>
            </div>
            </div>
        );
    }
}

export default ToDoTomorrow;