//stateless component which shows background according to day time or night




import React from 'react';



function TitleImage(props) {
  let isday=props.day;
  let titleClass;
    
  if(isday){
      titleClass='dtitle'
  }

  else{
      titleClass='ntitle'
  }

  return (
      
    <div >

      <h2 id='tit'className={titleClass}>FITZROY</h2>
      <h2 id='subtit'className={titleClass}>Weather    Forecast</h2>
                
    </div>
    );
}

  export default TitleImage;