import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

/* CSS imports */
import './App.css'
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation /> 
        <Logo />
        <ImageLinkForm />
        {/*<FaceRecog /> */}
      </div>
    );
  }
}

export default App;
