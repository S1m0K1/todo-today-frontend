import React from 'react';

class YesterdayDate extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <row>
          <column className="column-side col-sm-3">
            <h1 style={{ marginBottom: '-70px', color: 'grey' }}>7</h1>
            <h3 style={{ color: 'grey' }}>Saturday</h3>
            <hr style={{ color: 'grey' }} />
          </column>
        </row>
      </div>
    );
  }
}

export default YesterdayDate;