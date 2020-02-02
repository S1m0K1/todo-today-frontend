import React from 'react';
import TomorrowDate from './TomorrowDate';
import TomorrowList from './TomorrowList'

function ColumnRight() {
    return (
        <div className="col-md-3 tomorrow d-none d-md-block">
            <TomorrowDate />
            <TomorrowList />
        </div>
    );
}

export default ColumnRight;