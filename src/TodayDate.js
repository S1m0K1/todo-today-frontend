import React from 'react';

class TodayDate extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Can you use <row></row> - Or must it be a div classNamed row?*/}
        <div className="row">
          <div className="col-sm-6">
            <h1>5</h1>
            <h2>Sunday</h2>
            <h3 style={{ color: 'white' }}>Jan, 2020</h3>
            <hr style={{ borderStyle: 'none', borderTopStyle: 'dotted', borderWidth: '5px', width: '10%' }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayDate;