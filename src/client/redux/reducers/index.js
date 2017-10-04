import { combineReducers } from 'redux';
import exclamation from './exclamation';
import products from './currentProductView';
import navMenu from './navMenu';

const applicationState = combineReducers({
  exclamation,
  products,
  navMenu
});

export default applicationState;
