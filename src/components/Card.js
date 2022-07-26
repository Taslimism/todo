import profile1 from "../assets/profile1.svg";
import comment from "../assets/comment.svg";

const Card = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className='mt-5 p-5 bg-white border-2 rounded-xl shadow-md'>
			<p>Design App</p>
			<p className='text-sm my-4'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
				laboriosam similique possimus iste?
			</p>
			<div className='flex justify-between'>
				<img className='h-6' src={profile1} alt='profile' />
				<div>
					<span className='text-sm text-gray-400 mr-2'>1</span>
					<img className='h-4 inline-block' src={comment} alt='comment' />
				</div>
			</div>
		</div>
	);
};

export default Card;
