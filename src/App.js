import React from 'react';
import './App.css';

// import ColumnMain from './todo-components/ColumnMain';
import YesterdayDate from './todo-components/YesterdayDate';
import ToDoYesterday from './todo-components/ToDoYesterday';
import TodayDate from './todo-components/TodayDate';
import ToDoToday from './todo-components/ToDoToday';
import ToDoFooter from './todo-components/ToDoFooter';
import TomorrowDate from './todo-components/TomorrowDate';
import ToDoTomorrow from './todo-components/ToDoTomorrow';

function App() {
  return (
    <div className="container-fluid">
      {/* Why do I have horizontal scroll and no side-by-side columns?? */}
      
      <YesterdayDate />
      <ToDoYesterday />
      {/* <ColumnMain /> */}
      <TodayDate />
      <ToDoToday />
      <ToDoFooter />

      <TomorrowDate />
      <ToDoTomorrow />
    </div>
  );
}

export default App;