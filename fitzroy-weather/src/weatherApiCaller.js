import React from 'react';
const API_KEY2="e36ed364400282e43250b6c4c0274d44";
class WeatherApiCaller extends React.Component {

constructor(props){
    super(props);
    this.state = {
      isUpdated:false,
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
 

}
componentDidUpdate(){

this.getWeather();
 
}

getWeather=async ()=>{



  if(this.props.lon&&this.props.lat&&(!this.state.isUpdated)){       
  const api= await 
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY2}`
    );
  const data=await api.json();
  this.setState({
    isUpdated:true,
    longitude:data.coord.lon,
    latitude:data.coord.lat,
    city:data.cod,
    country:'',
    tempreture:data.main.temp,
    pressure:data.main.pressure,
    windspeed:data.wind.speed,
    winddir:data.wind.deg,
    visibility:data.visibility,
        

  })
  console.log(this.state)
  
}
}


render(){

return(

<div>

</div>

);
    
}

}

export default WeatherApiCaller;