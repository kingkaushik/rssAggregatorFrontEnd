import {createStore,applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import Constants from '../constants'

const consoleMessages = store => next => action =>{
   let result
   // console.log('action is',action);
  // if(action.type===C.PAYMENTS_INFORMATION_ENDED){
  //   console.log('Action is',action.type);
  //   console.log('payload is',action.payload);
  //   console.log("Previous state: ",store.getState().payments_information);
  // }
  // console.log(action);
  result = next(action)

  // if(action.type===C.PAYMENTS_INFORMATION_ENDED){
  //   console.log("next state: ",store.getState().payments_information);
  // }

  return result
}

export default applyMiddleware(thunk,consoleMessages)(createStore)(reducer);
