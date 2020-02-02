import React from 'react';

class YesterdayDate extends React.Component {
  render() {
    return ( 
      <div className="yesterday-date">    
        <h1 style={{ fontSize: '4.5em', color: 'grey', paddingTop: '75px' }}>7</h1>
        <h3 style={{ color: 'grey', paddingTop: '50px', paddingBottom: '10px' }}>Friday</h3>
        <hr style={{ borderTopStyle: 'dotted', borderWidth: '5px', width: '10%', color: 'grey', margin: 'center' }}/>
      </div>
    );
  }
}

export default YesterdayDate;