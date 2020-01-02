import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: '#1e836c' }}>
        <row>
          <column className="column-main">
            <h2>23</h2>
            <h2>Monday</h2><br />
            <h3 style={{ color: 'white' }}>Dec, 2019</h3>
            <hr />
          </column>
        </row>
      </div>
    );
  }
}

export default TodayDate;