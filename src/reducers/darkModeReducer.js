import { DARKMODE, COUNT } from '../actions/types';

const initState = {
  darkmode: true,
  count: 5
};

export default (state = initState, action) => {
  switch (action.type) {
    case DARKMODE:
      return { ...state, darkmode: action.payload };
    case COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
