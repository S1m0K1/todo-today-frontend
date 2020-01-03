import React from 'react';

class YesterdayDate extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <h1 style={{ color: 'grey' }}>7</h1>
            <h3 style={{ color: 'grey', paddingTop: "50px" }}>Saturday</h3>
            <hr style={{ borderStyle: 'none', borderTopStyle: 'dotted', borderWidth: '5px', width: '10%', color: "grey", margin: "center"}} />
          </div>
        </div>
      </div>
    );
  }
}

export default YesterdayDate;