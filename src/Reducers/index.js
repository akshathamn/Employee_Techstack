import { combineReducers } from 'redux';
import employeereducer from './employeereducer';
import techStackReducer from './techStackReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  employeereducer,
  techStackReducer,
  projectReducer
});