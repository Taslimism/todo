import { nanoid } from "nanoid";
import { useState } from "react";
import profile from "../assets/profile.svg";

const Input = ({ setTodo }) => {
	const [todoItem, setTodoItem] = useState({
		title: "",
		description: "",
		id: "",
	});
	const handleTodo = (e) => {
		const { name, value } = e.target;
		const id = nanoid();
		setTodoItem((prev) => ({ ...prev, [name]: value, id }));
	};
	const handleListTodo = () => {
		if (todoItem.description && todoItem.title) {
			setTodo((prevTodo) => [...prevTodo, todoItem]);
			setTodoItem({
				title: "",
				description: "",
			});
		}
	};
	return (
		<div className='p-5 mt-5 bg-white rounded-xl h-36 border-2 shadow-sm flex flex-col justify-between '>
			<input
				onChange={handleTodo}
				onBlur={handleListTodo}
				value={todoItem.title}
				name='title'
				className='focus:outline-none text-md'
				type='text'
				placeholder='Give your task a title'
			/>
			<input
				onChange={handleTodo}
				onBlur={handleListTodo}
				value={todoItem.description}
				name='description'
				className='focus:outline-none text-sm mt-1'
				type='text'
				placeholder='Description'
			/>
			<div className='mt-2'>
				<img className='h-15' src={profile} alt='profile' />
			</div>
		</div>
	);
};

export default Input;
