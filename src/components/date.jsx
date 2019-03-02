import React, { Component } from 'react';

class Date extends Component {
    state = {  }
    getDate()
    {
        var date=this.props.date;
        var date_formatted=[];
        for(var i=0;i<date.length-5;i++)
        {
            date_formatted[i]=date[i];
        }
        return date_formatted;
    }
    render() {
        return ( <div>{this.getDate()}</div> );
    }
}

export default Date;
