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
  todo,
}: RowProps) => {
  const [showModal, setShowModal] = useState(false);
  const openCloseModal = () => {
    setShowModal((prev: any) => !prev);
  };
  return (
    <div
      className={`
    
     flex w-full p-4 mb-2 justify-between 
       ${isCompleted ? "bg-gray-400 border-b-2" : "bg-gray-50 border-b-2 h-20"}
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
        className={`flex justify-evenly pl-16
          ml-2 text-xl font-sans font-medium  
          ${isCompleted ? "text-white line-through" : "text-gray-800"}
        `}
      >
        <div className="flex justify-start">{task}</div>{" "}
        <span className="flex justify-between">{status}</span>
        <div className="">{date}</div>
        <div className="">{time}</div>
      </div>
      <div className="w-1/6 pl-36 flex justify-between items-center mr-1">
        <div>
          <button
            aria-label="Delete a todo"
            className="h-7 w-7 flex justify-center items-center hover:bg-gray-200  font-bold  rounded"
            onClick={openCloseModal}
          >
            <img src={editIcon} alt="" />
          </button>
          {showModal ? (
            <>
              <BaseEditModalWrapper
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
              />
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <button
          aria-label="Delete a todo"
          className="h-7 w-7 flex justify-center items-center hover:bg-gray-200    font-bold  rounded"
        >
          <img src={ic} alt="" />
        </button>
      </div>
    </div>
  );
};
