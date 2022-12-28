import React , { useState}  from 'react';
import '../App.css'

const Mouse = () => {

    let red = Math.random(255);
    let green =  Math.random(255);
    let blue =  Math.random(255);


    const MouseOver ={
        backgroundColor: `rgb(${red},${green},${blue})`,
        height: 225,
        width: 225
        

    }
    const Encima= ({ propStyle}) =>{
        return(
            <button  style={propStyle} >EVENTS</button>
        )
    
    }
    let optionalButton ;
    // OPTION A
  
    optionalButton = <Encima propStyle={MouseOver}></Encima>
  function mouseOver() {
   
    }


    return (
        <div>
       {optionalButton}
            
             <button id='botons' onMouseOver={mouseOver}>Hola </button>
            
                
            
        </div>
         
        
    );
}

export default Mouse;
