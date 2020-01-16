import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <div className="col-6">
        <h1>5</h1>
        <h2>Sunday</h2>
        <h3 style={{ color: 'white' }}>Jan, 2020</h3>
        <hr style={{ borderStyle: 'none', borderTopStyle: 'dotted', borderWidth: '5px', width: '50%' }} />
      </div>
    );
  }
}

export default TodayDate;