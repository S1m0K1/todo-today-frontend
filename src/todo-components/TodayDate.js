import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <header className="today-date">
        <h1 style={{ fontSize: '4.5em', paddingTop: '30px' }}>8</h1>
        <h1 style={{ paddingTop: '25px' }}>Sunday</h1>
        <h3 style={{ color: 'white' }}>Feb, 2020</h3>
        <hr style={{ color: 'white', borderWidth: '5px', width: '10%', marginTop: '40px' }} />
      </header>
    );
  }
}

export default TodayDate;