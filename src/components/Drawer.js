import profile from "../assets/profile.svg";

const Drawer = ({ isNotesClicked }) => {
	return (
		<div
			className={`w-1/2 h-full py-12 px-5 shadow-xl bg-white absolute right-0 text-sm  ${
				isNotesClicked ? "translate-x-0" : "translate-x-full"
			} ease-in duration-300`}>
			<p className="after:content-[''] after:block after:bg-primary after:w-8 after:h-1 after:mt-1 after:rounded-2xl">
				Design App
			</p>
			<div className='mt-10 '>
				<div className='flex '>
					<p className='mr-8 text-gray-400'>Created By</p>
					<div>
						<img
							className='h-6 mr-2 inline-block'
							src={profile}
							alt='profile'
						/>
						<span>Name Kumar</span>
					</div>
				</div>
				<div className='flex mt-16'>
					<p className='mr-8 text-gray-400'>Description</p>
					<div>
						<span>
							Desription about something I dont know what I am writing pver her.
							lets see how it turns out to be
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
