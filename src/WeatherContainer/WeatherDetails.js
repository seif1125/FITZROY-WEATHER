
import React, { Component } from 'react'
import Temperature from "../WeatherComponents/Temperature.js";
import HumidityDetail from '../WeatherComponents/HumidityDetail.js';
import PressureDetail from '../WeatherComponents/PressureDetail.js';
import WindDetail from "../WeatherComponents/WindDetail.js";
export default class WeatherDetailsSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredComponent: [
        <Temperature t={this.props.t} d={this.props.d} i={this.props.i}/>,
        <HumidityDetail h={this.props.h}/>,
        <PressureDetail p={this.props.p}/>,
        <WindDetail ws={this.props.ws} wd={this.props.wd}/>,
      ],
      selectedindex: 0,
      componentCarouselNames: ["Tempreture", "Humidity", "Pressure", "Wind"],
    };

    this.nextDetail = this.nextDetail.bind(this);
    this.prevDetail = this.prevDetail.bind(this);
  }

  componentDidMount() {}

  renderedbullets() {
    let e = [];

    for (let index = 0; index < this.state.filteredComponent.length; index++) {
      if (index === this.state.selectedindex) {
        e.push(<span key={index} className="dot activated"></span>);
      } else {
        e.push(<span key={index} className="dot "></span>);
      }
    }
    console.log(e);
    return e;
  }

  nextDetail() {
    let r = this.state.selectedindex + 1;
    if(r>=4){
      this.setState({ selectedindex: 0 });
    }
    else{
      this.setState({ selectedindex: r });
    }
  }
  
  prevDetail() {
    let r = this.state.selectedindex - 1;

    if (r <0) {
      this.setState({ selectedindex: 3 });
    }

    else {
      this.setState({ selectedindex: r });
    }

  }

  renderArrows() {
    console.log(this.state); 
    let e = [];

    if (this.state.selectedindex !== 0 && this.state.selectedindex !== 3) {
      e[0] = 
        <a
     
          title={
            "to " +
            this.state.componentCarouselNames[this.state.selectedindex - 1]
          }
        className="prev"
        onClick={this.prevDetail}
        >
          &#10094;
        </a>
      
      e[1] = 

        <a
      
          title={
            "to " +
            this.state.componentCarouselNames[this.state.selectedindex + 1]
          }
          className="next"
          onClick={this.nextDetail}
        >
          &#10095;
        </a>
      
    } 
  else if (this.state.selectedindex === 0) {
     e[0] = 
     <a
     key={'next'}
    
     title={"to " + this.state.componentCarouselNames[3]}
     className="prev"
     onClick={this.prevDetail}
      >
      &#10094;
      </a>
      
     e[1] = 
     <a
        key={'prev'}
    
     title={
     "to " +
     this.state.componentCarouselNames[this.state.selectedindex + 1]
     }
     className="next"
     onClick={this.nextDetail}
     >
     &#10095;
     </a>
     
    } 
  else {
    e[0] = 
      <a
    
      title={
      "to " +
      this.state.componentCarouselNames[this.state.selectedindex - 1]
      }
      className="prev"
      onClick={this.prevDetail}
      >
      &#10094;
      </a>
      
    e[1] = 
      <a
    
      title={"to " + this.state.componentCarouselNames[0]}
      className="next"
      onClick={this.nextDetail}
      >
      &#10095;
      </a>
      
    }

    return e;
  }

  render() {
    return (
      <div>
        <div>
          {this.renderArrows()}
        </div>

        <div className="carousel">
         
          <div className="mySlides">
            {this.state.filteredComponent[this.state.selectedindex]}
          </div>

          <div className="dot-cont">
            {this.renderedbullets()}
          </div>

        </div>
      </div>
    );
  }

}

