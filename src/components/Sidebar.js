import overview from "../assets/overview.svg";
import chat from "../assets/chat.svg";
import calendar from "../assets/calendar.svg";
import projects from "../assets/projects.svg";
import stats from "../assets/stats.svg";
import logout from "../assets/logout.svg";
import settings from "../assets/settings.svg";

const Sidebar = () => {
	return (
		<div className='flex flex-col justify-between col-span-2 border-r-2 pl-12 h-full pt-8'>
			<div>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={overview} alt='overview' />
					<span className='text-gray-400'>Overview</span>
				</div>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={stats} alt='stats' />
					<span className='text-gray-400'>Stats</span>
				</div>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={projects} alt='projects' />
					<span>Projects</span>
				</div>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={chat} alt='chat' />
					<span className='text-gray-400'>Chat</span>
				</div>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={calendar} alt='calendar' />
					<span className='text-gray-400'>Calendar</span>
				</div>
			</div>
			<div className='pb-28'>
				<div className='mb-4'>
					<img className='inline-block mr-4' src={settings} alt='calendar' />
					<span className='text-gray-400'>Settings</span>
				</div>
				<div>
					<img className='inline-block mr-4' src={logout} alt='calendar' />
					<span className='text-gray-400'>Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
