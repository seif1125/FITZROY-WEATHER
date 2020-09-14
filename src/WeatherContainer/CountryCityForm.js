import  { Fragment } from 'react';

import '../Flags.css';
import RegionSelect from 'react-region-flag-select';
import React from 'react';



function CountryCityForm(props) {
   
   
    let formelement;
    console.log(props);
    var code=""; 



            console.log(code);
    if(props.isAutomatically===true&&(props.selectedCountry!=='')){
            
        console.log("form succeded");
          code = "flag-icon flag-icon-"+props.selectedCountry+" flagic";
       

        
             formelement = (
               <Fragment>
                 <span className={code}></span>
                 <span className="location">
                   {"     " +
                     props.selectedCountry +
                     "    ,    " +
                     props.selectedCity}
                 </span>
                 <br />
                 <br />
                 <input type="checkbox" checked onChange={props.togglecheck}></input>
                 <label id="autolbl" >
                   
                   SetAutomatically
                 </label>
                 <button disabled className="disabled-btn" type="button">
                   Get Weather
                 </button>
               </Fragment>
             );
            
             
          
    }
    else{
              formelement = (
                <Fragment>
                  <RegionSelect
                    isPhoneCode={false}
                    isState={false}
                    handleChange={props.getData}
                  />
                  <input type="checkbox" onChange={props.togglecheck}></input>
                  <label id="autolbl"> SetAutomatically</label>
                  <button
                    onClick={props.getWeatherManually}
                    className="enabled-btn"
                    type="button"
                  >
                    Get Weather
                  </button>
                </Fragment>
              );

        console.log("form manual");
    }


  

    return (

        <div className='form-container'>

            <form onSubmit={props.getWeatherManually}> 
                
                       {formelement}  
                
            </form>    
            
        </div>
    );
}

export default CountryCityForm;