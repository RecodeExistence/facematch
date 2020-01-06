import React from 'react'; 
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className = "f3 tc">
                {'Face Recognition tool;  Supply a picture and find a face!'}
            </p>
        
        <div className = 'center'>
            <div className = 'pa4 br4 shadow-5 input-container'>
                <input className = "f4 pa2 w-70" type = "text" />
                <button className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>
        </div>
        </div>  
    );
}

export default ImageLinkForm; 