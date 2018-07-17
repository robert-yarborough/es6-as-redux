import createStore  from './_store/createStore';
import { todos } from './_reducers/todos';
//helpers
import { randomId } from './_helpers/randomId';


// create a higher-order function, to act as state and action wrapper for context
function app (state = {}, action) {
	return {
		todos: todos(state.todos, action)
	}
}


// create store reference
const store = createStore(app);
//console.log(store.getState());// undefined because the store hasn't been called with an action


store.subscribe(() => {
	console.log('new state is:', store.getState());// listens for event changes, and returns the values
});


// 'subscribe' to state changes
/*store.subscribe(() => {
	//const {todos} = store.getState();
	const getTodo = store.getState();
	//getTodo.forEach(addTodoToDOM);
	for(let item in getTodo){
		if (getTodo.hasOwnProperty(item) ){
			return addTodoToDOM(getTodo[item])
		}
	}

});*/


// event handler for 'dispatching' actions on events
function addTodo(){
	const input = document.getElementById('todo');
	const name = input.value;
	input.value = '';

	store.dispatch({
		type: 'ADD_TODO',
		todo: {
			name,
			id: randomId(),
			complete: false
		}
	});

}






// event listeners
document.getElementById('todoBtn').addEventListener('click', addTodo);



// addTodoToDOM
function addTodoToDOM(todo){
	const node = document.createElement('li');
	const text = document.createTextNode(todo[0].name);
	node.appendChild(text);
	document.getElementById('todos').appendChild(node);
}
