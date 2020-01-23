import React from 'react';
import './App.css';
import ColumnLeft from './todo-components/ColumnLeft';
import ColumnMain from './todo-components/ColumnMain';
import ColumnRight from './todo-components/ColumnRight';

import ToDoToday from './todo-components/ToDoToday';
import ToDoYesterday from './todo-components/ToDoYesterday';
import ToDoTomorrow from './todo-components/ToDoTomorrow';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Double-click todos to edit.", completed: false },
      { id: 2, description: "Click todos to mark as done.", completed: true },
      { id: 3, description: "Drag todos to the top or bottom of the list, or to the next column.", completed: false },
    ]
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ColumnLeft />
          <ColumnMain />
          <ColumnRight />
        <div className="row">
          <ToDoYesterday />
          <ToDoToday />
          <ToDoTomorrow />
        </div>
      </div>
      </div>
    );
  }
}

export default App;