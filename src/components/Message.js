import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    /* Toggle Message*/
    changeMessage(){
        if(this.state.message==='Welcome Visitor'){
            this.setState({
                message: 'Thank you for subscribing!!'
            })
        }else{
            this.setState({
                message: 'Welcome Visitor'
            })
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;