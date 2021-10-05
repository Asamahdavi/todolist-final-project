import { RowProps } from "./types/fileTypes";
import editIcon from "../assets/editIcon.png";
import ic from "../assets/icancel.png";

import { memo, useState } from "react";
import BaseEditModalWrapper from "./BaseEditModalWrapper";

export const Row = memo(
  ({
    todo: { id, task, isCompleted, date, time, status },
    handleCheckTodo,
    setDate,
    setTime,
    setTodos,
    todos,
    setEditedTask,
    editedTask,
    todo,
    editedDate,
    editedTime,
    setEditedDate,
    setEditedTime,
    setEditedStatus,
    editedStatus,
  }: RowProps) => {
    console.log("row");
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
          className={`  flex  truncate   w-full 
          ${isCompleted ? "text-white" : "text-gray-800"}
        `}
        >
          <span className=" w-1/5 text-center">{task}</span>
          <div className=" w-1/5 text-center">
            <span className=" w-1/5 text-center">{status}</span>
          </div>

          <span className="  w-1/5 text-center">{date}</span>
          <span className="  w-1/5  text-center">{time}</span>

          <div className="w-1/5 pl-2 flex justify-evenly text-center items-center mr-1">
            <div>
              <button
                aria-label="edit a todo"
                className="h-5 w-5 flex justify-center  items-center hover:bg-gray-200  rounded"
                onClick={openCloseModal}
              >
                <img src={editIcon} alt="" />
              </button>
              {showModal ? (
                <>
                  <BaseEditModalWrapper
                    setEditedStatus={setEditedStatus}
                    editedStatus={editedStatus}
                    todos={todos}
                    setTodos={setTodos}
                    date={date}
                    status={status}
                    showModal={showModal}
                    onBackDropClick={openCloseModal}
                    setDate={setDate}
                    setTime={setTime}
                    time={time}
                    editedTask={editedTask}
                    setEditedTask={setEditedTask}
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
              className="h-5 w-5 flex justify-center items-center hover:bg-gray-200 font-bold  rounded"
            >
              <img src={ic} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);
