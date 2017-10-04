import { createStore } from 'redux';
import appState from './reducers';

let store = createStore(appState);

export default store;
