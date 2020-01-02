import React from 'react';

class ToDoToday extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <ul class="tasks-list">
                    <li>Double-click todos to edit.</li>
                    <hr />
                    <li style={{ textDecorationLine: "line-through" }}>
                        Click todos to mark as done.
                    </li>
                    <hr />
                    <li>
                        Drag todos to the top or bottom of the list, or to the next column.
                    </li>
                    <hr />
                    <li>
                        <form>
                            <div>
                                <form>
                                    <button class="hover-button" type="button" onInput="">
                                        &#9998;
                                    </button>
                                </form>
                            </div>
                            {/* onInput: text input form appears? */}
                            {/* { Or pencil symbol is hover over input form?} */}
                            <input class="input" type="text" />
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ToDoToday;
