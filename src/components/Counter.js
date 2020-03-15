import React,{Component} from 'react';

const counterStyle = {
    padding:'10px',
    float:'left'
}

const halfDiv = {
    width:'50%',
    float:'right'
}

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    
    increment(){
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render(){
        return (
            <div>
                <div style={counterStyle,{width:'50%'}}>
                    Counter: {this.state.count}
                </div>
                <div style={halfDiv}>
                    <button onClick={()=>this.incrementFive()}>Incremental Click</button>
                </div>
            </div>
        )
    }

}

export default Counter;