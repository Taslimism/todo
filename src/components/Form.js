import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ isSignup }) => {
	const schema = yup.object().shape({
		name: yup.string(),
		email: yup.string().email("Please enter valid email").required(),
		paswords: yup.string().min(6).max(20).required(),
	});
	const {
		onSubmit,
		register,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form className='mt-12 pt-9 border-t-2 mx-12'>
			{isSignup ? (
				<input
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
				className='mb-9 w-full border py-2 px-2 rounded-md focus:outline-none'
				type='text'
				name='name'
				placeholder='Email'
			/>

			<input
				className='mb-10 w-full py-2 px-2 border rounded-md focus:outline-none'
				type='password'
				name='password'
				placeholder='Password'
			/>

			<button className='w-full mb-4 p-2 rounded-md  bg-primary text-white'>
				Login
			</button>
			<div className='flex items-center'>
				<input type='checkbox' className='accent-primary mr-2' />
				<span className='text-xs text-gray-400'>Remember Me</span>
			</div>
		</form>
	);
};

export default Form;
