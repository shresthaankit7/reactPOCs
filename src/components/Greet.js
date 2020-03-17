import React from 'react';

const greetStyle = {
    width: '50%',
    float: 'left'
}

const Greet = (props) => {
    console.log(props)
    return(
        <div style={greetStyle}>
            <h1>Hello, {props.name} a.k.a {props.heroName} !!</h1>
            {props.children}
        </div>
    )
}

export default Greet;