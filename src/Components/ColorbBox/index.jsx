import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'
ColorBox.propTypes = {
    
};

function changeColor(){
    const color = ['red', 'green', 'blue', 'deeppink', 'black']
    const randomColor = Math.trunc(Math.random() * 5)
    return color[randomColor]
}
function ColorBox() {
    const [color, setColor] = useState(()=>{
        const color_current = localStorage.getItem('color-current') || 'deeppink'
        return color_current
    })
    
    function handleChangeColor(){
        const newColor = changeColor()
        setColor(newColor)
        localStorage.setItem('color-current', newColor)
    }
    return (
        <div
          className="color-box"
          style={{backgroundColor: color}}
          onClick={handleChangeColor}
        >
            
        </div>
    );
}

export default ColorBox;