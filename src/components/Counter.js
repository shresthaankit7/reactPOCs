import React,{Component} from 'react';

const counterStyle = {
    padding:'10px'
}

const halfDiv = {
    width:'50%',
    float:'left'
}

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    
    incrementFive(){
        this.setState({
            count : this.state.count + 1
        })
    }
    
    render(){
        return (
            <div>
                <div style={counterStyle,halfDiv}>
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