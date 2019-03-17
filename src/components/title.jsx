import React, { Component } from 'react';
import "../styles/title.css";

class Title extends Component {
    render() {
        return ( <div className="div">{this.props.title}</div>);
    }
}

export default Title;
