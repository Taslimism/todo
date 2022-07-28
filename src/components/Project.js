import Input from "./Input";
import Drawer from "./Drawer";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import profile1 from "../assets/profile1.svg";
import comment from "../assets/comment.svg";
import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const Project = ({ isDrawerOpen, openCloseDrawer }) => {
	const [todo, setTodo] = useState([]);
	const [inprogress, setInProgress] = useState([]);
	const [completed, setIsCompleted] = useState([]);

	const handleDragEnd = (res) => {
		const { source, destination } = res;
		if (!destination || destination === source) {
			return;
		}

		const { droppableId: sourceDroppableId, index: sourceIndex } = source;
		const { droppableId: destinationDroppableId } = destination;

		if (destinationDroppableId === "inprogress") {
			if (sourceDroppableId === "completed") {
				setInProgress((prev) => [...prev, completed[sourceIndex]]);
				setIsCompleted((prev) =>
					prev.filter((item, index) => index !== sourceIndex)
				);
			} else if (sourceDroppableId === "inputlist") {
				setInProgress((prev) => [...prev, todo[sourceIndex]]);
				setTodo((prev) => prev.filter((item, index) => index !== sourceIndex));
			}
		} else if (destinationDroppableId === "completed") {
			if (sourceDroppableId === "inprogress") {
				setIsCompleted((prev) => [...prev, inprogress[sourceIndex]]);
				setInProgress((prev) =>
					prev.filter((item, index) => index !== sourceIndex)
				);
			} else if (sourceDroppableId === "inputlist") {
				setIsCompleted((prev) => [...prev, todo[sourceIndex]]);
				setTodo((prev) => prev.filter((item, index) => index !== sourceIndex));
			}
		} else if (destinationDroppableId === "inputlist") {
			if (sourceDroppableId === "inprogress") {
				setTodo((prev) => [...prev, inprogress[sourceIndex]]);
				setInProgress((prev) =>
					prev.filter((item, index) => index !== sourceIndex)
				);
			} else if (sourceDroppableId === "completed") {
				setTodo((prev) => [...prev, completed[sourceIndex]]);
				setIsCompleted((prev) =>
					prev.filter((item, index) => index !== sourceIndex)
				);
			}
		}
	};

	return (
		<div className='mt-8 col-span-10 px-12 relative overflow-hidden'>
			<div className='flex justify-between w-full '>
				<p className='text-lg'>Projects</p>
				<div>
					<img className='inline mr-4' src={filter} alt='filter' />
					<span>Filter</span>
				</div>
			</div>

			<DragDropContext onDragEnd={handleDragEnd}>
				<div className='flex justify-between gap-14 mt-8'>
					<Droppable droppableId='inputlist'>
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className='flex-1 border py-7 px-6 rounded-xl min-min-h-screen bg-secondary'>
								<div className='flex justify-between'>
									<p>Todo</p>
									<p className='text-primary p-2 bg-secondary'>{todo.length}</p>
								</div>
								<div>
									<button
										type='button'
										className='w-full bg-tertiary py-3 mt-5 rounded-md'>
										<img className='mx-auto' src={add} alt='Add' />
									</button>
								</div>
								<Input setTodo={setTodo} />
								{todo.length > 0 &&
									todo.map((data, index) => (
										<Draggable draggableId={data.id} index={index}>
											{(provided) => (
												<div
													key={index}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													onClick={openCloseDrawer}
													className='mt-5 p-5 bg-white border-2 rounded-xl shadow-md'>
													<p>{data.title}</p>
													<p className='text-sm my-4'>{data.description}</p>
													<div className='flex justify-between'>
														<img className='h-6' src={profile1} alt='profile' />
														<div>
															<span className='text-sm text-gray-400 mr-2'>
																1
															</span>
															<img
																className='h-4 inline-block'
																src={comment}
																alt='comment'
															/>
														</div>
													</div>
												</div>
											)}
										</Draggable>
									))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Droppable droppableId='inprogress'>
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className='flex-1 border py-7 px-6 rounded-xl min-h-screen bg-secondary'>
								<div className='flex justify-between'>
									<p>In Progress</p>
									<p className='text-primary p-2 bg-secondary'>
										{inprogress.length}
									</p>
								</div>
								<div>
									<button
										type='button'
										className='w-full bg-tertiary py-3 mt-5 rounded-md'>
										<img className='mx-auto' src={add} alt='Add' />
									</button>
								</div>
								<Input setTodo={setInProgress} />
								{inprogress.length > 0 &&
									inprogress.map((data, index) => (
										<Draggable draggableId={data.id} index={index}>
											{(provided) => (
												<div
													key={index}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													onClick={openCloseDrawer}
													className='mt-5 p-5 bg-white border-2 rounded-xl shadow-md'>
													<p>{data.title}</p>
													<p className='text-sm my-4'>{data.description}</p>
													<div className='flex justify-between'>
														<img className='h-6' src={profile1} alt='profile' />
														<div>
															<span className='text-sm text-gray-400 mr-2'>
																1
															</span>
															<img
																className='h-4 inline-block'
																src={comment}
																alt='comment'
															/>
														</div>
													</div>
												</div>
											)}
										</Draggable>
									))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Droppable droppableId='completed'>
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className='flex-1 border py-7 px-6 rounded-xl min-h-screen bg-secondary'>
								<div className='flex justify-between'>
									<p>Completed</p>
									<p className='text-primary p-2 bg-secondary'>
										{completed.length}
									</p>
								</div>
								<div>
									<button
										type='button'
										className='w-full bg-tertiary py-3 mt-5 rounded-md'>
										<img className='mx-auto' src={add} alt='Add' />
									</button>
								</div>
								<Input setTodo={setIsCompleted} />
								{completed.length > 0 &&
									completed.map((data, index) => (
										<Draggable draggableId={data.id} index={index}>
											{(provided) => (
												<div
													key={index}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													onClick={openCloseDrawer}
													className='mt-5 p-5 bg-white border-2 rounded-xl shadow-md'>
													<p>{data.title}</p>
													<p className='text-sm my-4'>{data.description}</p>
													<div className='flex justify-between'>
														<img className='h-6' src={profile1} alt='profile' />
														<div>
															<span className='text-sm text-gray-400 mr-2'>
																1
															</span>
															<img
																className='h-4 inline-block'
																src={comment}
																alt='comment'
															/>
														</div>
													</div>
												</div>
											)}
										</Draggable>
									))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Drawer isNotesClicked={isDrawerOpen} />
				</div>
			</DragDropContext>
		</div>
	);
};

export default Project;
