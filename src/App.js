import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import SignIn from './components/SignIn/SignIn';


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
      imageUrl: '', 
      box: {}
    }
  }

 
onInputChange = (event) => {
  this.setState({input: event.target.value});
}
 
calculateFaceLocation = data => {
  const clarifaiFace = data.outputs[0].data.regions[2].region_info.bounding_box;
  const image = document.getElementById('inputimage'); 
  const width = Number(image.width);
  const height = Number(image.height);
    return {
      leftCol: (clarifaiFace.left_col * width)  + 30, 
      topRow: (clarifaiFace.top_row * height) + 30,
      rightCol: width - (clarifaiFace.right_col * width) + 30,
      bottomRow: height - (clarifaiFace.bottom_row * height) + 30
    }
}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box:box});
}




onSubmitClicked = () => {
  const { input } = this.state;
  this.setState({imageUrl:input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(e => console.log(e));
}


render() {
    const { input } = this.state;
    const { onSubmitClicked } = this.onSubmitClicked;
    const { box } = this.state;
    return (
      <div className="App">
         <Navigation />
         {/* <SignIn /> */} 
         <ImageLinkForm  onInputChange = {this.onInputChange} submitClicked = {this.onSubmitClicked}/>
        <Logo input = {input} box = {box} 
        onSubmitClicked = {onSubmitClicked} />
       <Rank />
      </div>
    );
  }
}

export default App;
