import index from './index';
import createStore from './_store/createStore';

describe('index', () => {
	// reducer to test
	function app(state = {}, action){
		return {
			todos: todos(state.todos,  action)
		}
	}

	test('stores the store object in a variable', () => {
		let store = createStore(app);
		expect(store).toBeTruthy();
	})
});

