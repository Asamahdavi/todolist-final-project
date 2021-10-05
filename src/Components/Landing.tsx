import { useState } from "react";
import { Row } from "./Row";
import { data } from "./types/staticValues";
import BaseAddModalWrapper from "./BaseAddModalWrapper";
import { Todo } from "./types/fileTypes";
import moment from "moment";
import React from "react";

export const Landing = () => {
  //states
  let dateNow = new Date();
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>(data);
  const [date, setDate] = useState<string | null | undefined>(
    moment(dateNow).format("LL")
  );
  let formattedDate = moment(dateNow).format("HH:mm:ss");
  const [time, setTime] = useState<string | null | undefined>(formattedDate);
  const [status, setStatus] = useState<any>();
  const [editedTask, setEditedTask] = useState("");
  const [editedTodo, setEditedTodo] = useState<Todo | undefined | null>();
  const [editedTime, setEditedTime] = useState<string | null | undefined>();
  const [editedDate, setEditedDate] = useState<string | null | undefined>();
  const [editedStatus, setEditedStatus] = useState<any>();
  const [truevalue, setTruevalue] = useState(true);
  const hasTodos = todos.length > 0;
  //UseEffect

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json || "{}");
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);
  const handleCheckTodo = (id: string) => {};

  function submitEdits(id: string) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.task = editedTask;
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(todos);
  }

  const handleAddTodo = (todo: Todo): void => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
    console.log(updatedTodos);
  };
  const openCloseModal = () => {
    setShowModal((prev: any) => !prev);
  };
  // date and time handelers

  const handelTimeChanges = (time: moment.Moment | null | undefined) => {
    let formattedTime = moment(time).format("HH:mm:ss");
    setTime(formattedTime);
  };
  const handleDateChanges = (date: moment.Moment | null | undefined) => {
    let formattedDate = moment(date).format("LL");
    setDate(formattedDate);
  };
  //dropdown selector handeler

  const handleChangeStatus = (value: any) => {
    setStatus(value);
    console.log(value);
  };

  return (
    <div>
      {
        <>
          <div className="landingP">
            <button
              className="btn-add-task w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow  active:bg-pink-600   shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={openCloseModal}
            >
              <span className="text-3xl  py-0.75 "> +</span>
              <span className=" px-3 py-2 text-1xl ">Add Task</span>
            </button>
            {showModal ? (
              <>
                <BaseAddModalWrapper
                  setEditedStatus={setEditedStatus}
                  editedStatus={editedStatus}
                  handleChangeStatus={handleChangeStatus}
                  handleDateChanges={handleDateChanges}
                  handelTimeChanges={handelTimeChanges}
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
                />
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <div>
            <div className="absolute left-14 top-20">
              <button
                className="btn-Todo"
                value="uncomplete"
                onClick={() => setTruevalue(true)}
              >
                To Do
              </button>
            </div>
            <div className="absolute left-44 top-20 ">
              <button
                className="btn-Todo"
                value="completed"
                onClick={() => setTruevalue(false)}
              >
                Done
              </button>
            </div>
          </div>
          <div className="absolute flex  right-10 top-36">
            <button className=" btn-dateFilters  rounded-l border">
              Mounth
            </button>
            <button className=" btn-dateFilters border">Week</button>
            <button className=" btn-dateFilters  rounded-r border ">Day</button>
            <hr className="bg-black" />
          </div>

          <div className=" flex pt-96 lg:gap-x-20 xl:gap-x-16 xl:px-20 sm:gap-x-20 xl:space-x-1 md:pb-2 md:px-10 md:gap-x-16 sm:pb-2  sm:px-12 xl:pb-7  grid-cols-4 text-gray-600 left-36 text-xs font-sans font-medium border-b-2 2xl:gap-x-56   justify-between ">
            <div className="  pt-14 md:pr-2 lg:pr-24">
              <span className="w-7 text-righ justify-start lg:pl-10 pt-14 xl:pl-28 md:pr-2 ">
                {" "}
                Tasks
              </span>
            </div>
            <span className="text-right  pt-14 pl-3 pr-7 lg:pr-10 xl:pr-36 md:pr-0 xl:pl-0">
              {" "}
              Status
            </span>
            <span className=" text-right  pt-14  pl-2 pr-2 xl:pl-0 lg:pl-20 xl:pr-0 md:pr-4 md:pl-0 ">
              {" "}
              Date
            </span>
            <span className="text-right   pt-14 pr-2 md:pr-20 md:pl-16 xl:pl-20 lg:pr-48">
              {" "}
              Time
            </span>
          </div>

          <div className=" bg-center h-screen flex justify-end items-center  ">
            <section className=" bg-left w-full lg:w-full px-14 flex flex-col items-center">
              <div className=" absolute bg-left w-full lg:w-full px-14 top-72 flex flex-col items-center">
                {todos
                  .filter(
                    truevalue
                      ? (e) => e.isCompleted === false
                      : (e) => e.isCompleted === true
                  )
                  .map((todo) => (
                    <Row
                      setEditedStatus={setEditedStatus}
                      editedStatus={editedStatus}
                      handleChangeStatus={handleChangeStatus}
                      handleDateChanges={handleDateChanges}
                      editedTodo={editedTodo}
                      setEditedTodo={setEditedTodo}
                      key={todo.id}
                      todo={todo}
                      // handleDeleteTodo={handleDeleteTodo}
                      handleCheckTodo={handleCheckTodo}
                      status={todo.status}
                      task={task}
                      date={date}
                      setStatus={setStatus}
                      setTask={setTask}
                      handleAddTodo={handleAddTodo}
                      showModal={showModal}
                      onBackDropClick={openCloseModal}
                      setDate={setDate}
                      setTime={setTime}
                      time={time}
                      submitEdits={submitEdits}
                      todos={todos}
                      setTodos={setTodos}
                      editedTask={editedTask}
                      setEditedTask={setEditedTask}
                      setEditedDate={setEditedDate}
                      setEditedTime={setEditedTime}
                      editedDate={editedDate}
                      editedTime={editedTime}
                      handelTimeChanges={handelTimeChanges}
                    />
                  ))}

                {!hasTodos && (
                  <p className="mb-5 text-xl text-red-500 uppercase">
                    Please add a todo!
                  </p>
                )}
                {hasTodos && <p></p>}
              </div>
            </section>
          </div>
        </>
      }
    </div>
  );
};
