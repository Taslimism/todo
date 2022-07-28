import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";
import { DragDropContext } from "react-beautiful-dnd";

const Main = () => {
	const [isDrawerOpen, openCloseDrawer] = useState(false);

	return (
		<div onClick={() => openCloseDrawer(false)}>
			<Header />
			<div className='grid grid-cols-12 h-screen'>
				<Sidebar />
				<DragDropContext>
					<Project
						isDrawerOpen={isDrawerOpen}
						openCloseDrawer={(e) => {
							e.stopPropagation();
							openCloseDrawer(true);
						}}
					/>
				</DragDropContext>
			</div>
		</div>
	);
};

export default Main;
