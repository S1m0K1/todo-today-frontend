import React from 'react';

class YesterdayDate extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <h1 style={{ color: '#1e836c' }}>6</h1>
            <h3 style={{ color: '#1e836c', paddingTop: "50px" }}>Monday</h3>
            <hr style={{ borderStyle: 'none', borderTopStyle: 'dotted', borderWidth: '5px', width: '10%', color: "#1e836c", margin: "center"}} />
          </div>
        </div>
      </div>
    );
  }
}

export default YesterdayDate;