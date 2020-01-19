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

  componentDidMount() {
    this.setState({input: ''})
  }



onInputChange = (event) => {
  this.setState({input: event.target.value});
}
 
calculateFaceLocation = data => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage'); 
  const width = Number(image.width);
  const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width, 
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
}

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box:box})
}




onSubmitClicked = () => {
  this.setState({imageUrl:this.state.input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
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
         <SignIn /> 
         <ImageLinkForm  onInputChange = {this.onInputChange} submitClicked = {this.onSubmitClicked}/>
        <Logo input = {input} box = {box} 
        onSubmitClicked = {onSubmitClicked} />
       <Rank />
      </div>
    );
  }
}

export default App;
