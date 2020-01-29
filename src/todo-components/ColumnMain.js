import React from 'react';
import TodayDate from './TodayDate';
import TodayList from './TodayList';
import Footer from './Footer'

function ColumnMain() {
    return (
        <div class="col-12 col-md-6 today">
            <TodayDate />
            <TodayList />
            <Footer />
        </div>
        
    );
}

export default ColumnMain;