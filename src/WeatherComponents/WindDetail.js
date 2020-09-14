//stateless component which shows background according to day time or night




import React from 'react';
import WindIcon from '../Media/windicon.png';


function WindDetail(props) {
  
  

    return (
      <div>
        <span className="detailtitlew"> Wind </span>
        <img alt={'wind logo'}class="logo-weather" src={WindIcon} />
        <br />
        <br />
        <span className="detailedw">
           {props.ws}<span id="w">meter/sec,{props.wd}°</span>
        </span>
        <br />
        <br />
      </div>
    );
}

  export default WindDetail;