import { createStore } from 'redux';
import darkModeReducer from './reducers/darkModeReducer';

export default () => {
  return createStore(darkModeReducer);
};
