//stateless component which shows background according to day time or night




import React from 'react';



function TitleImage(props) {
    let isdaytime=props.day;
    let titleClass;
    
    if(isdaytime){
      titleClass='dtitle'
    }

    else{
      titleClass='ntitle'
    }

    return (
      
                <div >

                        <h1 id='tit'className={titleClass}>FITZROY</h1>
                        <h2 id='subtit'className={titleClass}>Weather    Forecast</h2>
                </div>
    )
}

  export default TitleImage;