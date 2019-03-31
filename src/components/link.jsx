import React, { Component } from 'react';
import '../styles/link.css'
class Link extends Component {
    getLink()
    {
        var link=this.props.link;
        return <a href={link} target="blank"><button className="button button4">Visit Website</button></a>;
    }

    render() {
        return ( this.getLink() );
    }
}

export default Link;
