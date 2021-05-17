import React, { Component } from "react";
import { API_URL } from './constants';
import Slider from './components/Slider';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const response = await fetch(API_URL);
    const json = await response.json();
    this.setState({apidata: json, loading: false});  
  }
  render() {
    const {apidata, loading} = this.state;
    if (loading) {
      return null;
    }
    return (
      <Slider apidata={apidata}/>
    );
  }
}

export default App;