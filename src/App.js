import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecog from './components/FaceRecog/FaceRecog';


/* CSS imports */
import './App.css'
import 'tachyons';

/*Clarify API*/
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: '36d3e539c74840cba994cda478933ea8'
 });
 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmitClicked = () => {
  this.setState({imageUrl:this.state.input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
    function(response) {
      console.log('response: ', response);
    },
    function(err) {
      // there was an error
      console.log('error: ', err);
    }
  );
}
  


  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <Navigation /> 
        <Logo input = {input} />
        <Rank />
        <ImageLinkForm  onInputChange = {this.onInputChange} submitClicked = {this.onSubmitClicked}/>
        <FaceRecog imageUrl = {this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
