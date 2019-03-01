import Constants from '../constants';

const initialState = {
  propOne:0,
  propTwo:1,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case Constants.propOne:
      return { ...state, propOne: 1};
    case Constants.PROP_TWo:
      return { ...state, propTwo: 1 };
    default:
      return state;

  }
};
