import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.comments}`)
        event.preventDefault()
    }

    render(){
        const {userName, comments, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" 
                            value={userName} 
                            onChange={this.handleUserNameChange}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea type="text"
                                value={comments}
                                onChange={this.handleCommentsChange}/>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} 
                                onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;