//stateless component which shows background according to day time or night




import React from 'react';
import ErrorIcon from '../Media/erroricon.png';


function  LocationError(props) {
  
  

  return (
    <div className='error-cont'>
      <img alt={'error icon'} class="error-img" src={ErrorIcon} />
      <span className="error-text">{" "+props.error}</span>
      <br />

    </div>

    );
}

  export default LocationError;