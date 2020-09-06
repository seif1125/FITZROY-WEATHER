// this class is handling all the component of the app 



import React from 'react';
import TitleImage from'./TitleImage.js';
import DateTimePanel from './dateTimePanel.js';
import WeatherApiCaller from './weatherApiCaller.js';
import './App.css';



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



// lifecycle Functions
 componentDidMount(){ 
        this.getGeoLocation();
        this.clockHandler();
        this.isDay();
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
  let e;
      if(this.state.longitude){
        e=<WeatherApiCaller lon={this.state.longitude} lat={this.state.latitude}/>
     }
    return(
      
  
     
    <div className={background}>
     
     <TitleImage day={this.state.isday}/>
     <DateTimePanel date={this.state.date} />
      {e}
  
    

    </div>
    
    
    ) 
   
  }




//



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
                
                  () => this.getTime(),1000
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
                    this.setState({
                                    longitude:lon,
                                    latitude:lat,
                                   });
                    })



  }





}




export default App;

