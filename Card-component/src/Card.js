import image from './mandya.jpg'
import React from "react";

function Card(){
    return(
        <div className="card">
            <img src={image} alt='mandyaa'></img>
            <h1>Mandya</h1>
            <p>Mandya is a district in Karnataka,that's known for its sugar and rice production.</p>
        </div>
    );
}

export default Card