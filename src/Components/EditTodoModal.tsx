/* eslint-disable @typescript-eslint/no-unused-expressions */
import ReactDOM from "react-dom";
import { EditTodoProps } from "./types/fileTypes";
import { FormEvent } from "react";
import React from "react";
const EditTodoModal: React.FC<EditTodoProps> = ({
  onBackDropClick,
  handleAddTodo,
  children,
  setTask,
  todo: { id, date, time, task },
  setTodos,
  todos,
  editedTask,
  setEditedTask,
  editedTodo,
  setEditedTodo,
  todo,
}) => {
  let now = new Date().toLocaleDateString();

  function submitEdits(id: string) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.task = editedTask;
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log("id:");
    console.log(id);
    setEditedTodo(null);
  }
  const handleSubmitTodo = (e: FormEvent): void => {
    e.preventDefault();
    task = editedTask;

    setTodos([...todos]);
    onBackDropClick();
  };

  return ReactDOM.createPortal(
    <form
      onSubmit={handleSubmitTodo}
      onClick={onBackDropClick}
      className="  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-2/4 rounded-lg shadow-lg bg-gray-100 text-blue-500 "
      >
        <div className="p-4 pl-6 shadow-md">
          <span className="justify-center items-center">Add Your New Task</span>
        </div>

        <div className="relative p-4  ">
          <input
            type="text"
            name="task"
            onChange={(e) => setEditedTask(e.target.value)}
            value={editedTask}
            className="bg-transparent text-gray-900 border-none w-full h-24"
            placeholder=". . ."
          />
        </div>
        <div className=" flex  p-4  justify-center">
          <input
            type="text"
            name="date"
            placeholder={`${now}`}
            className="w-2/6 pl-12 pr-14 border-2 bg-gray-50 border-gray-300 rounded-sm"
          />

          <div className="w-2/6  pl-2 pr-2 "></div>
        </div>
        <div className="flex  pb-8 justify-end">
          {" "}
          <div className="p-1">
            <button
              type="button"
              className=" rounded-sm bg-blue-500 w-32  text-white pt-2 pb-2 pl-7 pr-7 "
              onClick={onBackDropClick}
            >
              {" "}
              Cancel
            </button>
          </div>
          <div className="p-1">
            <button
              // onClick={submitEdits(id)}
              type="submit"
              className="rounded-sm bg-blue-500 w-32  text-white pt-2 pb-2 pl-7 pr-7 "
              onClick={() => submitEdits(todo.id)}
            >
              save
            </button>
          </div>
        </div>
      </div>

      {children}
    </form>,
    document.getElementById("modal-root")!
  );
};
export default EditTodoModal;
