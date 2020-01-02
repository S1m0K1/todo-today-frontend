import React from "react";

class TodoPencilButton extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        <button class="pencil-btn" type="button" name="add a new todo">
                            &#9998;
                        </button>
                    </label>
                </form>
            </div>
        );
    }
}

export default TodoPencilButton;
