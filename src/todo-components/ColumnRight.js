import React from 'react';
import TomorrowDate from './TomorrowDate';
import ToDoTomorrow from './ToDoTomorrow';

function ColumnRight() {
    return (
        <div className="col-md-3 d-none d-md-block tomorrow">
            <TomorrowDate />
            <ToDoTomorrow />
        </div>
    );
}

export default ColumnRight;