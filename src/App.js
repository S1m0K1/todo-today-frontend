import React from 'react';

import ColumnLeft from './todo-components/ColumnLeft';
import ColumnMain from './todo-components/ColumnMain';
import ColumnRight from './todo-components/ColumnRight';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row"> 
          <ColumnLeft />
          <ColumnMain />
          <ColumnRight />

        </div>
      </div>
    );
  }
}

export default App;