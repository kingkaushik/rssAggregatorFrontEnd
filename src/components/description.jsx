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
        var flag=0;
        if ((description===null) || (description==='')||(description==='None'))
            return " ";
        else
            description = description.toString();
        return description.replace(/<[^>]*>/g, '');
        /*for(;i<description.length;i++)
        {
            if(description.substr(i,8)==="</p>\n<p>")
            {
                count=i+8;
                flag=1;
                break;
            }
        }
        if(flag===1)
        {
            for(i=count;i<description.length-5;i++)
            {
                desc+=description[i];
            }
        }
        else{

        }
        return {__html:desc};*/
    }
    render() {
        return ( <div >{this.getDescription()}</div> );
    }
}

export default Description;
