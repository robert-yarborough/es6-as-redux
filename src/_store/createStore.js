function createStore(reducer){
	// The store should have 4 parts
	/*
	1. The state
	2. Get the state
	3. Listen to changes on the state
	4. Update the state
	*/


	let state;
	const listeners = [];


	//global methods

	/**
	 * getState:
	 * params: none
	 * return: state object
	 * */
	const getState = () => (state);


	/**
	 * subscribe:
	 * params: Function
	 * return: Array
	 */
	const subscribe = (listener) => {
		listeners.push(listener);
		listeners.forEach((listener) => {
			return listener();
		})
	};


	/**
	 * dispatch:
	 * params:
	 * return:
	 */
	const dispatch = (action) => {
		state = reducer(state, action);
		//console.log(state);
		//update the event listeners
		listeners.forEach((listener) => listener());
	};


	return {
		getState,
		subscribe,
		dispatch
	}


}


export default createStore;







