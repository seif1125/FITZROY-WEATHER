//stateless component which shows background according to day time or night




import React from 'react';


function Temperature(props) {
  
  let iconcode=props.i;
  let link= `http://openweathermap.org/img/wn/${iconcode}@2x.png`

let convertedtemp=Math.round((props.t)-273.15);


  return (
    <div>
      <span className="detailtitlet"> Temperature </span>
      <img  alt={'temp icon'}className="logo-weather" src={link} />
      <span className="detailedt">{convertedtemp}° C </span>
      <br />
      <span className="descc">{props.d}</span>
      <br />
      <br/>
    </div>
  );

}

  export default Temperature;