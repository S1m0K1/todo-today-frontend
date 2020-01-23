import React from 'react';
import YesterdayDate from './YesterdayDate';

function ColumnLeft() {
    return (
            <div className="col-md-3 left d-none d-md-block"><YesterdayDate /></div>
    );
}

export default ColumnLeft;