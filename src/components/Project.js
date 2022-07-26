import Input from "./Input";
import Card from "./Card";
import Drawer from "./Drawer";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";

const Project = ({ isDrawerOpen, openCloseDrawer }) => {
	return (
		<div className='mt-8 col-span-10 px-12 relative'>
			<div className='flex justify-between w-full '>
				<p className='text-lg'>Projects</p>
				<div>
					<img className='inline mr-4' src={filter} alt='filter' />
					<span>Filter</span>
				</div>
			</div>
			<div className='flex justify-between gap-14 mt-8'>
				<div className='flex-1 border py-7 px-6 rounded-xl h-screen bg-secondary'>
					<div className='flex justify-between'>
						<p>Todo</p>
						<p className='text-primary p-2 bg-secondary'>2</p>
					</div>
					<div>
						<button
							type='button'
							className='w-full bg-tertiary py-3 mt-5 rounded-md'>
							<img className='mx-auto' src={add} alt='Add' />
						</button>
					</div>
					<Input />
					<Card onClick={openCloseDrawer} />
				</div>
				<div className='flex-1 border py-7 px-6 rounded-xl h-screen bg-secondary'>
					<div className='flex justify-between'>
						<p>In Progress</p>
						<p className='text-primary p-2 bg-secondary'>2</p>
					</div>
					<div>
						<button
							type='button'
							className='w-full bg-tertiary py-3 mt-5 rounded-md'>
							<img className='mx-auto' src={add} alt='Add' />
						</button>
					</div>
				</div>
				<div className='flex-1 border py-7 px-6 rounded-xl h-screen bg-secondary'>
					<div className='flex justify-between'>
						<p>Completed</p>
						<p className='text-primary p-2 bg-secondary'>2</p>
					</div>
					<div>
						<button
							type='button'
							className='w-full bg-tertiary py-3 mt-5 rounded-md'>
							<img className='mx-auto' src={add} alt='Add' />
						</button>
					</div>
				</div>
				<Drawer isNotesClicked={isDrawerOpen} />
			</div>
		</div>
	);
};

export default Project;
