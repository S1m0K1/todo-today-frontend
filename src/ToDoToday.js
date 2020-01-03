import React from 'react';

class ToDoToday extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="tasks-list">
                            <li>Double-click todos to edit.</li>
                            <hr />
                            <li style={{ textDecorationLine: "line-through", paddingTop: "25px" }}>
                                Click todos to mark as done.
                            </li>
                            <hr />
                            <li>Drag todos to the top or bottom of the list, or to the next column.</li>
                            <hr />
                            <li>
                                <div className="form">
                                    <label>
                                        <button class="pencil-btn" type="button" name="add a new todo">
                                            &#9998;
                                        </button>
                                    </label>
                                    <form>
                                        {/* onClick: text input form appears? */}
                                        {/* Or pencil symbol is hover over input form? */}
                                        <input className="input" type="text" />
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoToday;
