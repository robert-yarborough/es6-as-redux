export function todos (state = [], action) {
	//	the reducer is responsible for
	switch (action.type){
		case 'ADD_TODO':
			return state.concat([action.todo]);
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE_TODO':
			return state.map((todo) => {
				return todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete})
			});
		default:
			return state;

	}
}