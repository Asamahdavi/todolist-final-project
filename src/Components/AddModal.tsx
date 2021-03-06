import ReactDOM from "react-dom";
import { addModal } from "../types/fileTypes";
import { ChangeEvent, FormEvent, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { StatusDropDownComponent } from "./StatusDropDownComponent";
import { TimePickerComponent } from "./TimePickerComponent";
import { DatePickerComponent } from "./DatePickerComponent";

export const AddTodo: React.FC<addModal> = memo(
  ({
    onBackDropClick,
    handleAddTodo,
    children,
    setTask,
    task,
    status,
    date,
    time,
    setStatus,
    setTime,
    setDate,
    handelTimeChanges,
    handleDateChanges,
    handleChangeStatus,
  }) => {
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
            <span className="justify-center items-center">
              Add Your New Task
            </span>
          </div>

          <div className="relative p-4  ">
            <input
              type="text"
              name="task"
              onChange={handleChange}
              defaultValue={task}
              className="bg-transparent text-gray-900 border-none w-full h-24"
              placeholder="New Task..."
            />
          </div>
          <div className=" flex  p-4  justify-center ">
            <div className=" w-full flex lg:grid lg:grid-flow-col lg:space-x-2 lg:justify-start sm:grid sm: grid-col sm:justify-items-start sm:space-x-0  ">
              <div className="w-1/5 ">
                <DatePickerComponent handleDateChanges={handleDateChanges} />
              </div>
              <div className="w-1/6 ">
                <TimePickerComponent handelTimeChanges={handelTimeChanges} />
              </div>
              <div className="w-1/5 ">
                <StatusDropDownComponent
                  setStatus={setStatus}
                  handleChangeStatus={handleChangeStatus}
                />
              </div>
              <div className="w-1/5"></div>
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
  }
);
