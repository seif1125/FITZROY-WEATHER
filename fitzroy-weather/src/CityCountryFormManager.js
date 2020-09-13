import react from 'react';
import React, { Component } from 'react'
import countries from './Countries.js'


export default class CityCountryFormManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedcountryDropdownList: [],
      renderedcitylist: [],
      selectedcountry: "",
      selectedcity: "",
      enabledvaluesforform: {
        counselect: "",
        cityselect: "",
        buttonselect: "",
      },
    };
  }

  componentDidMount() {
    if (!this.state.rendercountries) {
      this.rendercountries();
    }
  }
  componentDidUpdate(prevprops) {
    if (prevprops.countrycode !== this.state.selectedcountry) {
      this.setState({
        selectedcountry: prevprops.countrycode,
        selectedcity: prevprops.cityid,
      });
    }
    console.log(this.state.selectedcountry);
  }

  rendercountries = () => {
    var renderedcountrieselements = [];

    for (let i = 0; i < 243; i++) {
      renderedcountrieselements.push(
        <option value={countries[i].code}>{countries[i].name}</option>
      );
    }

    this.setState({ renderedcountryDropdownList: renderedcountrieselements });
  };
  rendercities = () => {
    var renderedcountrieselements = [];

    for (let i = 0; i < 243; i++) {
      renderedcountrieselements.push(
        <option value={countries[i].code}>{countries[i].name}</option>
      );
    }

    this.setState({ renderedcountryDropdownList: renderedcountrieselements });
  };

  render() {
    return (
      <div>
        <select value={this.state.selectedcountry}>
          <option value="">Select Country</option>
          {this.state.renderedcountryDropdownList}
        </select>
      </div>
    );
  }
}
