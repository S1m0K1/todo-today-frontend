import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-6 today">
        <h1 style={{ paddingTop: '50px' }} >19</h1>
        <h2 style={{ paddingTop: '25px' }} >Sunday</h2>
        <h3 style={{ color: 'white', paddingBottom: '75px' }}>Jan, 2020</h3>
        <hr style={{ width: '15%' }} />
      </div>
    );
  }
}

export default TodayDate;