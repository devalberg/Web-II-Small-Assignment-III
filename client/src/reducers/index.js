import { combineReducers } from 'redux';
import bossDetailsReducer from './bossDetailsReducer';
import bossListReducer from './bossListReducer';

export default combineReducers({
    bossDetails: bossDetailsReducer,
    bossList: bossListReducer
});