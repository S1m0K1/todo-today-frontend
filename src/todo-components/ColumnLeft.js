import React from 'react';
import YesterdayDate from './YesterdayDate';
import YesterdayList from './YesterdayList'

function ColumnLeft() {
    return (
        <div className="col-md-3 yesterday d-none d-md-block">
            <YesterdayDate />
            <YesterdayList />
        </div>
    );
}

export default ColumnLeft;