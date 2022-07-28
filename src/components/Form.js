import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useUserStore from "../store/user.store";

const initialValues = {
	name: "",
	email: "",
	password: "",
};

const Form = ({ isSignup, setIsSignup }) => {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [rememberme, setIsRememberMe] = useState(false);
	const { setCredentials, name, email, password } = useUserStore((state) => ({
		setCredentials: state.setCredentials,
		name: state.name,
		email: state.email,
		password: state.password,
	}));
	const schema = yup.object().shape({
		name: yup.string(),
		email: yup.string().email("Please enter valid email").required(),
		password: yup.string().min(6).max(20).required(),
	});
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		initialValues,
	});

	const submitHandler = (data) => {
		setCredentials(data);
		if (!isSignup) {
			const { email, password } = data;
			if (rememberme) {
				const storedEmail = localStorage.getItem("email");
				const storedPassword = localStorage.getItem("password");
				if (
					storedEmail &&
					storedEmail === email &&
					storedPassword &&
					storedPassword === password
				) {
					navigate("/home");
				} else {
					setError("Password and email dont match");
				}
			} else {
				const storedEmail = sessionStorage.getItem("email");
				const storedPassword = sessionStorage.getItem("password");
				if (
					storedEmail &&
					storedEmail === email &&
					storedPassword &&
					storedPassword === password
				) {
					navigate("/home");
				} else {
					setError("Password and email dont match");
				}
			}
		} else if (isSignup) {
			setIsSignup(false);
			navigate("/login");
		}

		if (rememberme) {
			localStorage.setItem("name", name);
			localStorage.setItem("password", password);
			localStorage.setItem("email", email);
		} else {
			sessionStorage.setItem("name", name);
			sessionStorage.setItem("password", password);
			sessionStorage.setItem("email", email);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className='mt-12 pt-9 border-t-2 mx-12'>
			{isSignup ? (
				<input
					{...register("name")}
					className='mb-9 w-full border py-2 px-2 rounded-md focus:outline-none'
					type='text'
					name='name'
					placeholder='Full Name'
				/>
			) : (
				<div className='mb-9'>
					<h1 className='text-textColor text-xl'>To Continue</h1>
					<p className='text-xs text-gray-400'>We need your Name & Email</p>
				</div>
			)}

			<input
				{...register("email")}
				defaultValue={initialValues.email}
				className='mb-9 w-full border py-2 px-2 rounded-md focus:outline-none'
				type='text'
				name='email'
				placeholder='Email'
			/>

			<input
				{...register("password")}
				className='mb-7 w-full py-2 px-2 border rounded-md focus:outline-none'
				defaultValue={initialValues.password}
				type='password'
				name='password'
				placeholder='Password'
			/>
			<p className='text-red-500 mt-1 mb-2 text-center'>
				{errors.password?.message || errors.email?.message || error}{" "}
			</p>
			<button className='w-full mb-4 p-2 rounded-md  bg-primary text-white'>
				Login
			</button>
			<div className='flex items-center'>
				<input
					checked={rememberme}
					onChange={() => setIsRememberMe(!rememberme)}
					type='checkbox'
					className='accent-primary mr-2'
				/>
				<span className='text-xs text-gray-400'>Remember Me</span>
			</div>
		</form>
	);
};

export default Form;
