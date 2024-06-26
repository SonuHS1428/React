//ColorPicker: An exercise for using useState() hook and onChange() event handler

import React,{useState} from 'react';
function ColorPicker(){
    
    const [color,setColor]=useState("#00FFFF");//useState() to create state variable and a state function

    function handleColorChange(event){
        setColor(event.target.value);
    }
    
    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor:color}}>
                <p>Selected Color:{color}</p>
            </div>
            <label>Select a color    </label>
            <input type='color' value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker