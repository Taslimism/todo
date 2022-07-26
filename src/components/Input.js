import profile from "../assets/profile.svg";

const Input = () => {
	return (
		<div className='p-5 mt-5 bg-white rounded-xl h-36 border-2 shadow-sm flex flex-col justify-between '>
			<input
				className='focus:outline-none text-md'
				type='text'
				placeholder='Give your task a title'
			/>
			<input
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
