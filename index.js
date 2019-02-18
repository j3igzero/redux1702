const { createStore } = require('redux');

const defaultState =  { value: 0 };

const reducer = (state = defaultState, action)=> {
	if (action.type === 'UP') return { value: state.value + 1 };
	if (action.type === 'DOWN') return { value: state.value - 1 };
	return state;
};

const store = createStore(reducer);

console.log('TRUOC KHI dispatch: ' + store.getState().value);

store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'DOWN' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });

console.log('SAU KHI dispatch: ' + store.getState().value);