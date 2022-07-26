import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Main = () => {
	return (
		<>
			<Header />
			<div className='grid grid-cols-12 h-screen'>
				<Sidebar />
				<div className='pt-8'>hdejhd</div>
			</div>
		</>
	);
};

export default Main;
