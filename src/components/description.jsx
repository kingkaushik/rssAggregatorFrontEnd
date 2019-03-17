import React, { Component } from 'react';
class Description extends Component {
    state = { 
       
     }
    getDescription()
    {
        var description=this.props.description;        
        var desc="";
        var count=0;
        var i=0;
        for(;i<description.length;i++)
        {
            if(description.substr(i,8)==="</p>\n<p>")
            {
                count=i+8;
                break;
            }
        }
        for(i=count;i<description.length-5;i++)
        {
            desc+=description[i];
        }
        
        return {__html:desc};
    }
    render() { 
        return ( <div dangerouslySetInnerHTML={this.getDescription()}/> );
    }
}
 
export default Description;