import React from 'react';
import TodayDate from './TodayDate';
import ToDoToday from './ToDoToday';

function ColumnMain() {
    return (
        <div className="col-12 col-md-6 today">
            <TodayDate />
            <ToDoToday />
        </div>

    );
}

export default ColumnMain;