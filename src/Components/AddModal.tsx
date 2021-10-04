import ReactDOM from "react-dom";

import { addModal } from "./types/fileTypes";
import { ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { TimePickerComponent } from "./TimePickerComponent";
import { DatePickerComponent } from "./DatePickerComponent";

export const AddTodo: React.FC<addModal> = ({
  onBackDropClick,
  handleAddTodo,
  children,
  setTask,
  task,
  status,
  setStatus,
  date,
  time,
  setTime,
  setDate,
}) => {
  // let now = new Date().toLocaleTimeString;

  const handleChange = (e: ChangeEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmitTodo = (e: FormEvent): void => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      status: status,
      isCompleted: false,
      time: time,
      date: date,
    };
    task && handleAddTodo(todo);
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
            onChange={handleChange}
            value={task}
            className="bg-transparent text-gray-900 border-none w-full h-24"
            placeholder="New Task..."
          />
        </div>
        <div className="  flex  p-2  justify-center">
          <div className="w-full">
            <TimePickerComponent
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
            <DatePickerComponent
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          </div>
          <div className="w-2/6  pl-2 pr-2  pt-4">
            {/* <Status setStatus={setStatus} /> */}
          </div>
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
              onClick={handleSubmitTodo}
              type="submit"
              className="rounded-sm bg-blue-500 w-32  text-white pt-2 pb-2 pl-7 pr-7 "
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {children}
    </form>,
    document.getElementById("modal-root")!
  );
};
