//stateless component which shows background according to day time or night




import React from 'react';
import PressureIcon from '../Media/pressureicon.png';


function PressureDetail(props) {
  
  

  return (
    <div>
      <span className="detailtitle"> Pressure </span>
      <img class="logo-weather" src={PressureIcon} />
      <br />
     
      <span className="detailedp">{props.p}<span id="p">hPa</span></span>
      <br />

    </div>

    );
}

  export default PressureDetail;