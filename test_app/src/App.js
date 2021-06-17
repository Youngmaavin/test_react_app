import React, { Component } from "react";
import { API_URL } from './constants/index';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

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
      <div className='app'>
      <Header />
      <Content apidata={apidata}/>
      <Footer />
      </div>
    );
  }
}

export default App;