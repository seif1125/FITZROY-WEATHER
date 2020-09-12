// this class is handling all the component of the app 



import React from 'react';
import TitleImage from'./OtherComponents/TitleImage.js';
import DateTimePanel from './OtherComponents/dateTimePanel.js';
import WeatherApiCaller from './WeatherContainer/weatherApiCaller.js';




import './App.css';



class App extends React.Component {

  constructor(props){
    
    super(props);
   
    this.state = {
      date: new Date().toString().slice(0, 21),
      longitude: '',
      latitude: '',
      auto: false,
      isday: undefined,
    };
    
  }



// lifecycle Functions
 componentDidMount(){ 
        
    this.clockHandler();
    this.isDay();
 }



 componentWillMount(){
        
  clearInterval(this.timerID);
 
}

 componentDidUpdate(prevprops,prevState){
  
    if(!prevState.longitude&&!prevState.latitude){
                        
      this.getGeoLocation();
        
    }
      

}

 render() {
  
    let background;
    if(this.state.isday){
      background="day";
    }
    else{
      background='night'
    }
 

      
    return(
      
  
     
     <div className={background}>
      
        <TitleImage 
        isday={this.state.isday}
        />

        <DateTimePanel 
        date={this.state.date}/>

       <WeatherApiCaller 
          auto={this.state.auto}
          lat={this.state.latitude}
         lon={this.state.longitude}
        />
     
     </div>
    
    
    ) 
   
}




//



  isDay=()=>{

    if (parseInt(this.state.date.slice(16,18))<12){
      this.setState({isday:true});
    }

    else{
      this.setState({isday:false});
    }
  
  }


  clockHandler(){

    this.timerID = setInterval(
                
      () => this.getTime(),30000
    
    );

  }

  getTime=()=>{
    
    let d=new Date().toString().slice(0,21);
    this.setState(
      {
        date:d    
      }
    
    );
  
  }


  getGeoLocation(){

    let lon,lat;
    navigator.geolocation.getCurrentPosition(position=>{

      lon=position.coords.longitude;
      lat=position.coords.latitude;
                     
      this.setState(
        {
          auto:true,
          longitude:lon,
          latitude:lat,
        }
                    
      );
    },
    )
                  
  }





}




export default App;

