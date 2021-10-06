import ReactDOM from "react-dom";
import { EditTodoProps } from "./types/fileTypes";
import { FormEvent, memo } from "react";
import React from "react";
import { DatePickerComponent } from "./DatePickerComponent";
import { TimePickerComponent } from "./TimePickerComponent";
import moment from "moment";
import { StatusDropDownComponent } from "./StatusDropDownComponent";
const EditTodoModal: React.FC<EditTodoProps> = ({
  onBackDropClick,
  children,
  todo: { id, task, status, isCompleted },
  setTodos,
  todos,
  editedTask,
  setEditedTask,
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
}) => {
  console.log("edit");

  const handleDateChanges = (date: moment.Moment | null | undefined) => {
    let formattedDate = moment(date).format("LL");
    setEditedDate(formattedDate);
  };

  // const handleDateChanges = useCallback(
  //   (date: moment.Moment | null | undefined) => {
  //     let formattedDate = moment(date).format("LL");
  //     setEditedDate(formattedDate);
  //   },
  //   [setEditedDate]
  // );
  const handelTimeChanges = (time: moment.Moment | null | undefined) => {
    let formattedTime = moment(time).format("HH:mm:ss");
    setEditedTime(formattedTime);
  };
  // const handelTimeChanges = useCallback(
  //   (time: moment.Moment | null | undefined) => {
  //     let formattedTime = moment(time).format("HH:mm:ss");
  //     setEditedTime(formattedTime);
  //   },
  //   [setEditedTime]
  // );
  const handelStatusChanges = (value: any) => {
    if (isCompleted) {
      setEditedStatus("Completed");
    } else {
      setEditedStatus(value);
    }
  };
  // const handelStatusChanges = useCallback(
  //   (value: any) => {
  //     setEditedStatus(value);
  //   },
  //   [setEditedStatus]
  // );
  const handelTaskChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };
  // const handelTaskChanges = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEditedTask(e.target.value);
  //   },
  //   [setEditedTask]
  // );

  // const submitEdits = useCallback(
  //   (id: string) => {
  //     const updatedTodos = [...todos].map((todo) => {
  //       if (todo.id === id) {
  //         todo.task = editedTask;
  //         todo.date = editedDate;
  //         todo.time = editedTime;
  //         todo.status = editedStatus;
  //       }
  //       return todo;
  //     });
  //     setTodos(updatedTodos);
  //   },
  //   [editedDate, editedStatus, editedTask, editedTime, setTodos, todos]
  // );
  function submitEdits(id: string) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        if (editedTask) {
          todo.task = editedTask;
        } else if (editedDate) {
          todo.date = editedDate;
        } else if (editedTime) {
          todo.time = editedTime;
        }
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
      className=" shadow-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-2/4 rounded-lg  bg-white"
      >
        <div className="p-4 pl-6 shadow-sm ">
          <span className="justify-center items-center text-blue-500">
            Add Your New Task
          </span>
        </div>

        <div className="relative p-4 ">
          <input
            type="text"
            name="task"
            onChange={handelTaskChanges}
            value={editedTask}
            className="bg-transparent border-none shadow-sm text-gray-900  w-full h-24 focus:bg-gray-50"
            placeholder=". . ."
          />
        </div>
        <div className=" flex  p-4  justify-center ">
          <div className="w-full flex lg:grid lg:grid-flow-col lg:space-x-2 lg:justify-start sm:grid sm: grid-col sm:justify-items-start sm:space-x-0  ">
            <div className="w-1/5 ">
              <DatePickerComponent handleDateChanges={handleDateChanges} />
            </div>
            <div className="w-1/6 ">
              <TimePickerComponent handelTimeChanges={handelTimeChanges} />
            </div>
            <div className="w-1/5 ">
              <StatusDropDownComponent
                handleChangeStatus={handelStatusChanges}
              />
            </div>
            <div className="w-1/5"></div>
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
export default memo(EditTodoModal);
