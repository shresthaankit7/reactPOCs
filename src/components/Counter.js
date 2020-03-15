import React,{Component} from 'react';

const counterStyle = {
    padding:'10px',
    float:'left',
    width:'50%'
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
                <div style={counterStyle}>
                    Counter: {this.state.count}
                </div>
                <button onClick={()=>this.incrementFive()}>Incremental Click</button>
            </div>
        )
    }

}

export default Counter;