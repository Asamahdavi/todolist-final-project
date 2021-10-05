import ReactDOM from "react-dom";
import { EditTodoProps } from "./types/fileTypes";
import { FormEvent } from "react";
import React from "react";
import { DatePickerComponent } from "./DatePickerComponent";
import { TimePickerComponent } from "./TimePickerComponent";
import moment from "moment";
import { StatusDropDownComponent } from "./StatusDropDownComponent";
const EditTodoModal: React.FC<EditTodoProps> = ({
  onBackDropClick,
  handleAddTodo,
  children,
  setTask,
  todo: { id, task },
  setTodos,
  todos,
  editedTask,
  setEditedTask,
  editedTodo,
  setEditedTodo,
  todo,
  setTime,
  time,
  date,
  setDate,
  editedDate,
  editedTime,
  setEditedDate,
  setEditedTime,
  setEditedStatus,
  editedStatus,
  status,
}) => {
  const handleDateChanges = (date: moment.Moment | null | undefined) => {
    let formattedDate = moment(date).format("LL");
    setEditedDate(formattedDate);
  };

  const handelTimeChanges = (time: moment.Moment | null | undefined) => {
    let formattedTime = moment(time).format("HH:mm:ss");
    setEditedTime(formattedTime);
  };
  const handelStatusChanges = (value: any) => {
    setEditedStatus(value);
  };
  function submitEdits(id: string) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.task = editedTask;
        todo.date = editedDate;
        todo.time = editedTime;
        todo.status = editedStatus;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  const handleSubmitTodo = (e: FormEvent): void => {
    e.preventDefault();
    task = editedTask;
    time = editedTime;
    date = editedDate;
    status = editedStatus;
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
          <div className="w-full">
            <TimePickerComponent
              handelTimeChanges={handelTimeChanges}
              date={date}
              setDate={setDate}
              time={editedTime}
              setTime={setTime}
              handleDateChanges={handleDateChanges}
            />
            <DatePickerComponent
              handelTimeChanges={handelTimeChanges}
              handleDateChanges={handleDateChanges}
              date={editedDate}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          </div>
          <div className="w-2/6  pl-2 pr-2 ">
            <StatusDropDownComponent handleChangeStatus={handelStatusChanges} />
          </div>
        </div>
        <div className="flex  pb-8 justify-end">
          <div className="p-1">
            <button
              type="button"
              className=" rounded-sm bg-blue-500 w-32  text-white pt-2 pb-2 pl-7 pr-7 "
              onClick={onBackDropClick}
            >
              Cancel
            </button>
          </div>
          <div className="p-1">
            <button
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
