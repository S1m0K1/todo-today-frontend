import React from 'react';

class TomorrowDate extends React.Component {
  render() {
    return (
      <div className="col-md-3 left d-none d-md-block tomorrow">
        <h1 style={{ color: '#1e836c', marginTop: '30px' }}>20</h1>
        <h3 style={{ color: '#1e836c', paddingTop: "50px", paddingBottom: '25px' }}>Monday</h3>
        <hr style={{ width: '10%', color: "#1e836c", margin: "center" }} />
      </div>
    );
  }
}

export default TomorrowDate;