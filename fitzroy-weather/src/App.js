import React from 'react';
import TitleImage from'./TitleImage.js';
import DateTimePanel from './dateTimePanel.js';
import WeatherApiCaller from './weatherApiCaller.js';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
const API_KEY="2eabbffd13d348069d00e65858ed28c4";
const API_KEY2="9f1ba088eaa0face96aebd6f93cfb8e1";
class App extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      date:new Date().toString().slice(0,24), 
      isday:false,
       longitude:'',
      latitude:'',

    };
    
  }




  componentDidMount(){ 
    this.getGeoLocation();
     this.clockHandler();
     this.isDay();
     
   
    
  


  }


componentDidUpdate(){
  //this.getWeather();
}



componentWillMount(){
  clearInterval(this.timerID);
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
     
     <TitleImage day={this.state.isday}/>
     <DateTimePanel date={this.state.date} />
     <WeatherApiCaller lon={this.state.longitude} lat={this.state.latitude}/>
    

    </div>
    
    
    ) 
   
  }


isDay=()=>{
if (parseInt(this.state.date.slice(16,18))<12){

  this.setState({isday:false});


}
else{

  this.setState({isday:true});

}

}

  clockHandler(){
    this.timerID = setInterval(
      () => this.getTime(),
      60000
    );

  }
 getTime=()=>{
  let d=new Date().toString().slice(0,24);
  this.setState({date:d});
  }

  getGeoLocation(){
      let lon,lat;
  navigator.geolocation.getCurrentPosition(position=>{

    lon=position.coords.longitude;
    lat=position.coords.latitude;
    this.setState(
      {
        longitude:lon,
        latitude:lat,
      }
    );
    console.log(this.state)
})



}

getWeather=async ()=>{



  if(this.state.longitude&&this.state.latitude){       
  const api= await 
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${API_KEY2}`
    );
  const data=await api.json();
  console.log(data);
}
}




}




export default App;

