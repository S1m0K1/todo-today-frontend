import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-6 today">
        <h1>19</h1>
        <h2>Sunday</h2>
        <h3 style={{ color: 'white', paddingBottom: '50px' }}>Jan, 2020</h3>
        <hr style={{ width: '10%' }} />
      </div>
    );
  }
}

export default TodayDate;