import React, { Component } from 'react';
import Title from './title';
import Date from './date';
import Description from './description';
import Link from './link';
import "../styles/content.css";

class Content extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            js:[]
         }
    }

    render() {
        return (

        <div className="div1">
            <div className="divFlex">

                <div className="div3">
                    <Title key={this.props.location.state.title} title={this.props.location.state.title.toUpperCase()}/>
                </div>

                <div className="date">
                    <Date key={this.props.location.state.date} date={this.props.location.state.date}/>
                </div>

                <div  className="div4">
                    <Description key={this.props.location.state.description} description={this.props.location.state.description}/>
                </div>

                <div className="div5">
                    <Link key={this.props.location.state.link} link={this.props.location.state.link}/>
                </div>
            </div>
        </div>);
    }
}

export default Content;
