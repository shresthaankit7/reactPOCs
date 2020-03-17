import React,{Component} from 'react';

class EventBind extends Component{

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    changeMessage = () => {
        this.setState({
            message: 'GoodBye'
        })
        console.log("HHHHHHH")
        console.log(this)
    }

    render(){
        return(
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.changeMessage.bind(this)}>Click Normal</button> */}
            <button onClick={this.changeMessage}>Click</button>
        </div>
        )
    }
}

export default EventBind;