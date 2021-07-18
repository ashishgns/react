import changeNum from './changeNum';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	changeNum: changeNum
});

export default rootReducer;