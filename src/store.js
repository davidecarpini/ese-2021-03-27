import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { defaultStore } from './constants';
import reducer from './reducer';


export default createStore(reducer, defaultStore, applyMiddleware(thunk))