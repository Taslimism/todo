import search from "../assets/search.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";
import profile4 from "../assets/profile4.svg";
import profile5 from "../assets/profile5.svg";
import useUserStore from "../store/user.store";

const Header = () => {
	const name = useUserStore((state) => state.name);
	return (
		<div className='grid grid-cols-12 items-center h-24'>
			<div className='col-span-2 border-r-2 h-24 flex items-center justify-between pl-12 '>
				<h3 className='text-2xl'>.taskez</h3>
			</div>
			<div className='col-span-10 grid grid-cols-12'>
				<div className='col-span-3 flex items-center pl-12'>
					<img className='h-5 mr-4' src={search} alt='magnifying glass' />
					<input
						type='text'
						className='focus:outline-none text-gray-400'
						placeholder='Search'
					/>
				</div>
				<div className='col-span-6 justify-center items-center relative flex'>
					<img className='h-8' src={profile1} alt='profile1' />
					<img className='h-8' src={profile2} alt='profile2' />
					<img className='h-8' src={profile3} alt='profile3' />
					<img className='h-8' src={profile4} alt='profile4' />
					<img className='h-8' src={profile5} alt='profile5' />
				</div>
				<div className='col-span-3 text-right pr-12'>
					<span className='mr-4'>Hi {name}</span>
					<img className='inline-block h-12' src={profile1} alt='profile1' />
				</div>
			</div>
		</div>
	);
};

export default Header;
