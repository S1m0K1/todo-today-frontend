import React from 'react';

class ToDoTomorrow extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <ul class="do-tomorrow">
                    <li>Add upcoming and future todo's.</li>
                    <hr />
                    <li>Today's undone todo's will move to tomorrow.</li>
                    <hr />
                    <li>
                        <form>
                            <label>
                                <input class="input-todo" type="text" />
                                {/* new task adds to list on enter */}
                            </label>
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ToDoTomorrow;
