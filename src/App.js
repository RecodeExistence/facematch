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
      input: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2019/01/sei_47528443-73a7.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1',
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
      console.log('response: ', response.outputs[0]);
    },
    function(err) {
      // there was an error
      console.log('error: ', err);
    }
  );
}
  


  render() {
    const { input } = this.state;
    const { onSubmitClicked } = this.onSubmitClicked;
    return (
      <div className="App">
        <Navigation /> 
        <Logo input = {input} onSubmitClicked = {onSubmitClicked} />
        <Rank />
        <ImageLinkForm  onInputChange = {this.onInputChange} submitClicked = {this.onSubmitClicked}/>
        <FaceRecog imageUrl = {this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
