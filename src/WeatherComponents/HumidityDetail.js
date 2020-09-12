//stateless component which shows background according to day time or night




import React from 'react';
import HumidityIcon from '../Media/humidityicon.png';


function HumidityDetail(props) {
  
  

    return (
      <div>
        <span className="detailtitle"> Humidity </span>
        <img class="logo-weather" src={HumidityIcon} />
        <br />
        <br />
        <span className="detailedh">{props.h}<span id="d">%</span></span>
        <br />
        <br />
        <br />
      </div>
    );
}

  export default HumidityDetail;