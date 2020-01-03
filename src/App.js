import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import TodayDate from './TodayDate';
// import ToDoToday from './ToDoToday';
// import ToDoFooter from './ToDoFooter';
// import YesterdayDate from './YesterdayDate';
import ToDoYesterday from './ToDoYesterday';
// import ToDoTomorrow from './ToDoTomorrow';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <TodayDate /> */}
        {/* <ToDoToday /> */}
        {/* <ToDoFooter /> */}
        {/* <YesterdayDate /> */}
        <ToDoYesterday />
        {/* <ToDoTomorrow /> */}
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