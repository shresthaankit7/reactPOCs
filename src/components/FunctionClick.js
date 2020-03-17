import React from 'react';

const functionClickStyle = {
    padding:'5px',
    width:'100%',
    clear: 'both'
}

const functionButton = {
    fontSize: '40px'
}

function FunctionClick(){

    function clickHandler(){
        console.log("Button Clicked")
    }

    return(
        <div style={functionClickStyle}>
            <button style={functionButton} onClick={clickHandler}>Function Click</button>
        </div>
    )
    

}

export default FunctionClick;