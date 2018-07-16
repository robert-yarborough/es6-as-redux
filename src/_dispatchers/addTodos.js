export function addTodo(){
	const input = document.getElementById('todo');
	const name = input.value;
	input.value = '';

	store.dispatch({
		type: 'ADD_TODO',
		todo: {
			id: randomId,
			name,
			complete: false
		}
	});
}