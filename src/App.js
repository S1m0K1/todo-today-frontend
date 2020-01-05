import React from 'react';
// import logo from './logo.svg';
import './App.css';

import YesterdayDate from './YesterdayDate';
import ToDoYesterday from './ToDoYesterday';
import TodayDate from './TodayDate';
import ToDoToday from './ToDoToday';
import ToDoFooter from './ToDoFooter';
import TomorrowDate from './TomorrowDate';
import ToDoTomorrow from './ToDoTomorrow';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          <div className="col-3">
            <YesterdayDate />
            <ToDoYesterday />
          </div>

          <div className="col-6">
            <TodayDate />
            <ToDoToday />
            <ToDoFooter />
          </div>

          <div className="col-3">
            <TomorrowDate />
            <ToDoTomorrow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;