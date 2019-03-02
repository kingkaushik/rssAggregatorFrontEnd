import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"

class Description extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            description:this.props.description
        };
    }

   getImage()
   {
        var rex = /<img[^>]+class="?([^"\s]+)"?\s+src="?([^"\s]+)"?\s*\"/g;
        var m = rex.exec( this.state.description );

        var k=m[0]+'width="250" height= "150" style="border-radius: 10px;"/>';
        // console.log(k);
        return {__html:k};
   }

    render() {

        return ( <div dangerouslySetInnerHTML={this.getImage()}/>);
    }

}

export default Description;
