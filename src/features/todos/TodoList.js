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
	return <div>TodoList</div>;
};

export default TodoList;
