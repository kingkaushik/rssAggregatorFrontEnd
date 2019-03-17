import React, { Component } from 'react';

class Link extends Component {
    getLink()
    {
        var link=this.props.link;
        return <a href={link}>{link}</a>;
    }

    render() {
        return ( this.getLink() );
    }
}

export default Link;
