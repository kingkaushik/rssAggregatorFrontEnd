import Constants from '../constants';

const initialState = {
  subscriptions:[]
};

export default (state = initialState, action) => {

  switch (action.type) {
    case Constants.LOGOUT:
      return initialState
    case Constants.ADD_SUBSCRIPTIONS:
      return { ...state, subscriptions:action.payload };
    default:
      return state;
  }
};
