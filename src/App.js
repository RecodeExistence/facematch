import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


/* CSS imports */
import './App.css'
import 'tachyons';
/*Clarify API*/
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: 'e1a02ce04ae9420e9920caa9c490ead2'
 });
 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      input: '',
      imageUrl: './components/Logo/polaroidbg.jpg', 
      box: {},
      route: 'signin', 
      userSignedIn: false
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
  this.setState({box});
}

onSubmitClicked = () => {
  const { input } = this.state;
  this.setState({imageUrl:input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(e => console.log(e));
}

onRouteChange = route =>  this.setState({route: route});

render() {
    const { input, box, route} = this.state;
    const { onSubmitClicked } = this.onSubmitClicked;
    
    return (
      <div className="App">
         <Navigation onRouteChange = {this.onRouteChange} />
         
         {route === "home" ? 
         <div className = "signedInDisplay">
                <Logo 
                  input = {input} 
                  box = {box} 
                  onSubmitClicked = {onSubmitClicked} 
                />

                <ImageLinkForm  
                  onInputChange = {this.onInputChange} 
                  submitClicked = {this.onSubmitClicked}
                />
                <Rank /> 
            </div>
            : (
              route === 'signin' 
              ?
              <SignIn onRouteChange = {this.onRouteChange} /> 
              : 
              <Register onRouteChange = {this.onRouteChange}/> 
            )
         }
      </div>
    );
  }
}

export default App;
