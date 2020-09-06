//stateless component which shows date and time 



import React from 'react';



function DateTimePanel(props) {
    let date=props.date;
   
    return (
      
                <div className='datepanel-container'>

                   <p id='datetime'>{date}</p>
                        
                </div>
    );
}

  export default DateTimePanel;