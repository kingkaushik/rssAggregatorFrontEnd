import React, { Component } from 'react';
import '../styles/App.css';
import {propOne} from '../actions/test'
import { connect } from 'react-redux'

class App extends Component {
  componentWillReceiveProps(newProps){
    console.log(newProps);
  }
  render() {
    function onClick(){
      console.log('YEAH i AM CLICKED');
    }
    return (
      <div className="App">
        <a href="http://localhost:3000/" onClick={e => {
                      e.preventDefault()
                      onClick()
                      this.props.dispatch(propOne())
                    }}>
                    HEY
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return {
    propOne:state.test.propOne,
    propTwo:state.test.propTwo,
  };
};
export default connect(mapStateToProps)(App);
