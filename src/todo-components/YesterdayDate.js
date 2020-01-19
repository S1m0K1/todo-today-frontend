import React from 'react';

class YesterdayDate extends React.Component {
  render() {
    return (
      <div className="col-md-3 left d-none d-md-block yesterday">
        <h1 style={{ color: 'grey', marginTop: '100px' }}>18</h1>
        <h3 style={{ color: 'grey', paddingTop: "50px", paddingBottom: '10px' }}>Saturday</h3>
        <hr style={{ width: '10%', color: "grey", margin: "center" }} />
      </div>
    );
  }
}

export default YesterdayDate;