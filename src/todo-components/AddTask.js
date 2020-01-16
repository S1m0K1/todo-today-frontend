import React from "react";

class AddTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <div className="form">
                        <button class="pencil-btn" type="button" name="add a new todo">
                            &#9998;
                            </button>
                        {/* onClick: text input form appears? */}
                        <form>
                            <input className="input" type="text" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;


