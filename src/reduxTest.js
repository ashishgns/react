import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incremt, decremt} from './actions/index';

const ReduxTest = () => {
	const mystate = useSelector((state) => state.changeNum);
	const dispatch = useDispatch();
	return (
		<React.Fragment>
			<button onClick={ () => dispatch(incremt())}>+</button>
			<input value={mystate} />
			<button onClick={ () => dispatch(decremt())}>-</button>
		</React.Fragment>
	);
}

export default ReduxTest;