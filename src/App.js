import React from 'react';
import './App.css';
// import ColumnLeft from './todo-components/ColumnLeft';
// import ColumnMain from './todo-components/ColumnMain';
// import ColumnRight from './todo-components/ColumnRight';
import TodayDate from './todo-components/TodayDate';
import YesterdayDate from './todo-components/YesterdayDate';
import TomorrowDate from './todo-components/TomorrowDate';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <ColumnLeft /> */}
        {/* <ColumnMain /> */}
        {/* <ColumnRight /> */}
        <YesterdayDate />
        <TodayDate />
        <TomorrowDate />

      </div>       
    </div>
  );
}

export default App;