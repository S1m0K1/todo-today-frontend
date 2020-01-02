import React from 'react';

class ToDoYesterday extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <ul class="done-list">
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!
                    </li>
                    <hr />
                    <li style={{ textDecorationLine: "line-through" }}>
                        Yesterday's done todo's are marked done!
                    </li>
                    <hr />
                    <li>
                        <li>Undone todos move to today's list.</li>
                        <hr />
                        <form>
                            <label>
                                <input
                                    class="input-done"
                                    type="text"
                                    style={{ textDecorationLine: "line-through" }} />
                            </label>
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ToDoYesterday;  
