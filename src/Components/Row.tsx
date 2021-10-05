import { RowProps } from "./types/fileTypes";
import editIcon from "../assets/editIcon.png";
import ic from "../assets/icancel.png";

import { useState } from "react";
import BaseEditModalWrapper from "./BaseEditModalWrapper";

export const Row = ({
  todo: { id, task, isCompleted, date, time, status },
  handleCheckTodo,
  onBackDropClick,
  setTask,
  setStatus,
  handleAddTodo,
  setDate,
  setTime,
  submitEdits,
  setTodos,
  todos,
  setEditedTask,
  editedTask,
  editedTodo,
  setEditedTodo,
  handelTimeChanges,
  todo,
  editedDate,
  editedTime,
  setEditedDate,
  setEditedTime,
  handleDateChanges,
  handleChangeStatus,
  setEditedStatus,
  editedStatus,
}: RowProps) => {
  const [showModal, setShowModal] = useState(false);
  const openCloseModal = () => {
    setShowModal((prev: any) => !prev);
  };
  return (
    <div
      className={` overflow-hidden truncate flex-row
    
     flex w-full p-4 mb-2 justify-between 
       ${
         isCompleted
           ? "bg-gray-400 border-b-2 h-20"
           : "bg-gray-50 border-b-2 h-20"
       }
      `}
    >
      <div className="grid absolute  pt-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
          className="text-gray-400 rounded-sm "
        />
      </div>
      <div
        className={` flex truncate flex-row  xl:gap-x-24 xl:px-40 xl:space-x-1 xl:px    md:pb-2 md:px-10 md:gap-x-16 sm:pb-2 sm:gap-x-9 sm:px-12 xl:pb-7  grid-cols-4 text-gray-600 left-36 text-xs font-sans font-medium   
          ${isCompleted ? "text-white" : "text-gray-800"}
        `}
      >
        <span className="w-6   flex-row  text-left justify-between pb-24 xl:pl-0 xl:pr-24 lg:pr-6 md:pr-16 sm:pl-20">
          {" "}
          {task}
        </span>
        <span className="w-6 text-right justify-between pl-10 pr-10 xl:pl-20  xl:pr-36 lg:pl-24 lg:pr-16 md:pr-36 sm:pl-8 sm:pr-14">
          {" "}
          {status}
        </span>
        <span className=" w-6 text-right  justify-between  pb-24 pl-10   xl:pl-24 lg:pr-20 lg:pl-16 xl:pr-36 pr-10 md:pr-32 ">
          {" "}
          {date}
        </span>
        <span className=" w-6 text-right justify-end pl-2 pr-2  xl:pl-20 lg:pl-16 md:pr-20">
          {" "}
          {time}
        </span>
        <div className="w-10 pl-2 flex justify-evenly items-center mr-1">
          <div>
            <button
              aria-label="Delete a todo"
              // className="h-7 w-7 flex justify-center items-center hover:bg-gray-200  font-bold  rounded"
              onClick={openCloseModal}
            >
              <img src={editIcon} alt="" />
            </button>
            {showModal ? (
              <>
                <BaseEditModalWrapper
                  setEditedStatus={setEditedStatus}
                  editedStatus={editedStatus}
                  handleChangeStatus={handleChangeStatus}
                  handleDateChanges={handleDateChanges}
                  handelTimeChanges={handelTimeChanges}
                  editedTodo={editedTodo}
                  setEditedTodo={setEditedTodo}
                  todos={todos}
                  setTodos={setTodos}
                  task={task}
                  date={date}
                  setStatus={setStatus}
                  status={status}
                  setTask={setTask}
                  handleAddTodo={handleAddTodo}
                  showModal={showModal}
                  onBackDropClick={openCloseModal}
                  setDate={setDate}
                  setTime={setTime}
                  time={time}
                  submitEdits={submitEdits}
                  editedTask={editedTask}
                  setEditedTask={setEditedTask}
                  id={id}
                  todo={todo}
                  setEditedDate={setEditedDate}
                  setEditedTime={setEditedTime}
                  editedDate={editedDate}
                  editedTime={editedTime}
                />
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <button
            aria-label="Delete a todo"
            className="h-7 w-7 flex justify-center items-center hover:bg-gray-200 font-bold  rounded"
          >
            <img src={ic} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
