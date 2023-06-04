import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo, deleteTodo, updateTodo, getTodos } from '../../api/todosApi';
import { FaTrash, FaUpload } from 'react-icons/fa';
import { useState } from 'react';

const TodoList = () => {
	const [newTodo, setNewTodo] = useState('');
	const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		error,
		data: todos,
	} = useQuery('todos', getTodos);

	const addTodoMutation = useMutation(addTodo, {
		onSuccess: () => {
			// Invalidates the cache and triggers a refetch.
			queryClient.invalidateQueries('todos');
		},
	});

	const updateTodoMutation = useMutation(updateTodo, {
		onSuccess: () => {
			// Invalidates the cache and triggers a refetch.
			queryClient.invalidateQueries('todos');
		},
	});
	const deleteTodoMutation = useMutation(deleteTodo, {
		onSuccess: () => {
			// Invalidates the cache and triggers a refetch.
			queryClient.invalidateQueries('todos');
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodoMutation.mutate({
			userId: 1,
			title: newTodo,
			completed: false,
		});
		setNewTodo('');
	};

	const newItemSection = (
		<form onSubmit={handleSubmit}>
			<label htmlFor="new-todo">Enter a new todo item</label>
			<div className="new-todo">
				<input
					type="text"
					id="new-todo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Enter a new todo"
				/>
			</div>
			<button className="submit">
				<FaUpload />
			</button>
		</form>
	);

	return <div>TodoList</div>;
};

export default TodoList;
