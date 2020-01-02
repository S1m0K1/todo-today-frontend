import React from 'react';
// import logo from './logo.svg';
import './App.css';

import TodayDate from './TodayDate';
import ToDoFooter from './ToDoFooter';
import TodoPencilButton from './ToDoPencilButton';
import ToDoToday from './ToDoToday';
import ToDoTomorrow from './ToDoTomorrow';
import ToDoYesterday from './ToDoYesterday';
import YesterdayDate from './YesterdayDate';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodayDate />
        <ToDoFooter />
        <TodoPencilButton />
        <ToDoToday />
        <ToDoTomorrow />
        <ToDoYesterday />
        <YesterdayDate />

      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;