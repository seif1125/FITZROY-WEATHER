// this is the class which holds all the weather data and pass it to its child components 


import CountryCityForm from './CountryCityForm.js';
import WeatherDetails from './WeatherDetails.js';
import Error from '../OtherComponents/Error.js';
import React from 'react';
const API_KEY2 = "f71f9364970b375dcc33b68a64153396";

class WeatherApiCaller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAutomatically: true,
    };

    this.togglecheck = this.togglecheck.bind(this);
    this.getData = this.getData.bind(this);
  
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    
    if (this.props.auto === true) {
      
      if (this.props.auto !== prevProps.auto) {
        this.getWeatherAutomatically();
      }

    }

  }


  togglecheck() {

    if (this.state.isAutomatically === true) {
      
      this.setState(

        { isAutomatically: false,
          tempreture:'' 
        }

      );

    }
    
    else {
         
      this.setState({ isAutomatically: true, tempreture: "" });

      this.getWeatherAutomatically();
    }

  }

  getData(data) {
   
    if (data.countryData.data && data.cityData.data) {
      this.setState(
        {
        tempreture:'',
        cityStateName: data.cityData.data.name,
        countrycode: data.countryData.data.sortname,
        }
      );
    }

    else{

      this.setState({tempreture:''})
    }

    
  }

  getWeatherAutomatically = async () => {

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY2}`
    );
    const data = await api.json();
   
    if (api.status===200) {
      this.setState({
        isAutomatically: true,
        cityStateName: data.name,
        countrycode: data.sys.country,
        tempreture: data.main.temp,
        pressure: data.main.pressure,
        windspeed: data.wind.speed,
        winddir: data.wind.deg,
        visibility: data.visibility,
        humidity: data.main.humidity,
        weatherdescription:data.weather[0].description,
        weathericon:data.weather[0].icon,
        error: "",
      });
    } 
    else {
      this.setState({
        isAutomatically: false,
        cityStateName: data.name,
        countrycode: data.sys.country,
        tempreture: data.main.temp,
        pressure: data.main.pressure,
        windspeed: data.wind.speed,
        winddir: data.wind.deg,
        visibility: data.visibility,
        humidity: data.main.humidity,
        weatherdescription: data.weather[0].description,
        weathericon: data.weather[0].icon,
        error: "Failed to get Data ..Please Try Again",
      });
    }

  };

  getWeatherManually = async () => {
    

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityStateName},${this.state.countrycode}&appid=${API_KEY2}`
    );

    const data = await api.json();
    
    if (api.status===200) {
      this.setState({
        isAutomatically: false,
        cityStateName: data.name,
        countrycode: data.sys.country,
        tempreture: data.main.temp,
        pressure: data.main.pressure,
        windspeed: data.wind.speed,
        winddir: data.wind.deg,
        visibility: data.visibility,
        humidity: data.main.humidity,
        weatherdescription: data.weather[0].description,
        weathericon: data.weather[0].icon,
        error: "",
      });
    }
    
    else {
      this.setState({
        isAutomatically: false,
        tempreture: "",
        pressure: "",
        windspeed: "",
        winddir: "",
        visibility: "",
        humidity: "",
        weatherdescription:"",
        weathericon: "",
        error: "City not Found ..Please Try Again with nearest city",
      });
    }
  }

  render() {
    console.log(this.state)
    let e;
      if(this.state.tempreture){
      
        e=<WeatherDetails t={this.state.tempreture} d={this.state.weatherdescription} i={this.state.weathericon} h={this.state.humidity} p={this.state.pressure} ws={this.state.windspeed} wd={this.state.winddir}/>
      }
      else if(!this.state.error==""){
       e=<Error error={this.state.error}/>;
        

      }
      
    return (
      <div>
        <CountryCityForm
          isAutomatically={this.state.isAutomatically}
          selectedCountry={this.state.countrycode}
          selectedCity={this.state.cityStateName}
          t={this.state.tempreture}
          togglecheck={this.togglecheck}
          getWeatherManually={this.getWeatherManually}
          getData={this.getData}
        />
        {e}
      </div>
    );
  }

}



export default WeatherApiCaller;