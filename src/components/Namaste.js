import React, {Component} from 'react';

import '../stylesheets/text.css';

class Namaste extends Component {
    render(){
        return <div>
                <h1 className="font">Namaste {this.props.name}.</h1>
            </div>
    }
}

export default Namaste;