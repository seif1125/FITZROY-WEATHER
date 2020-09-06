// this is the class which holds all the weather data and pass it to its child components 



import React from 'react';
const API_KEY2="e36ed364400282e43250b6c4c0274d44";
class WeatherApiCaller extends React.Component {

constructor(props){
    super(props);
    
    this.state = {
      isAutomatically:false,
      longitude:" ",
      latitude:" ",
      city:'',
      country:'',
      tempreture:'',
      pressure:'',
      windspeed:'',
      winddir:'',
      visibility:'',
      
    };
  }

componentDidMount(){
 if(this.state.isAutomatically){
          this.getWeather();
}
}





getWeather=async ()=>{
     
  const api= await 
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY2}`
    );
  const data=await api.json();
  
  this.setState({
                  isAutomatically:true,
                  longitude:data.coord.lon,
                  latitude:data.coord.lat,
                  city:data.cod,
                  country:'',
                  tempreture:data.main.temp,
                  pressure:data.main.pressure,
                  windspeed:data.wind.speed,
                  winddir:data.wind.deg,
                  visibility:data.visibility,
                  humidity:data.humidity,
        

  })
  
}


render(){

return(

        <div>

        </div>

);
    
}

}

export default WeatherApiCaller;