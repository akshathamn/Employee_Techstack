import { combineReducers } from 'redux';
import employeereducer from './employeereducer';
import techStackReducer from './techStackReducer'

export default combineReducers({
  employeereducer,
  techStackReducer
});