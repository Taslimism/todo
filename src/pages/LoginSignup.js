import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import hero from "../assets/login.svg";
import { useState } from "react";

const LoginSignup = () => {
	const [isSignup, setIsSignup] = useState(true);
	const navigate = useNavigate();

	return (
		<div className='flex items-center w-screen h-screen sm:flex-col md:flex-row'>
			<div className='mx-auto'>
				<img src={hero} alt='decorative icon' />
			</div>
			<div
				className={`mx-auto w-[36%] h-[76%] pt-14 px-14 border-2 border-gray-300 rounded-[65px]`}>
				<div className='font-medium text-2xl'>
					<button
						onClick={() => {
							setIsSignup(false);
							navigate("/login", { replace: true });
						}}
						className={`mr-4 after:content-[''] ${
							isSignup ? "text-gray-400" : ""
						} after:block ${
							isSignup ? "after:bg-gray-300" : "after:bg-[#1A3B58]"
						} after:w-4 after:h-1 after:rounded-3xl`}>
						Log In
					</button>
					<button
						onClick={() => {
							setIsSignup(true);
							navigate("/register", { replace: true });
						}}
						className={`after:content-[''] ${
							isSignup ? "text-[#1A3B58]" : "text-gray-400"
						} after:block ${
							isSignup ? "after:bg-[#1A3B58]" : "after:bg-gray-300"
						} after:w-4 after:h-1 after:rounded-3xl`}>
						Sign Up
					</button>
				</div>
				<Form isSignup={isSignup} />
			</div>
		</div>
	);
};

export default LoginSignup;
