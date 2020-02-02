import React from 'react';

class TomorrowDate extends React.Component {
  render() {
    return (
      <div className="tommorrow-date">
        <h1 style={{ fontSize: '4.5em', color: '#1e836c', paddingTop: '75px' }}>9</h1>
        <h3 style={{ color: '#1e836c', paddingTop: '50px', paddingBottom: '10px' }}>Sunday</h3>
        <hr style={{ borderTopStyle: 'dotted', borderWidth: '5px', width: '10%', color: '#1e836c', margin: 'center' }} />
      </div>
    );
  }
}

export default TomorrowDate;