import { useState } from "react";
import { Row } from "./Row";
import { data } from "./types/staticTodos";
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
  const [time, setTime] = useState<string | null | undefined | null>(
    formattedDate
  );
  const [status, setStatus] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editedTodo, setEditedTodo] = useState<Todo | undefined | null>();
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
  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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

  return (
    <div>
      {
        <>
          <div className="landingP">
            <button
              className="btn-add-task  active:bg-pink-600   shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={openCloseModal}
            >
              <span className="text-3xl  py-0.75 "> +</span>
              <span className=" px-3 py-2 text-1xl ">Add Task</span>
            </button>
            {showModal ? (
              <>
                <BaseAddModalWrapper
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
                {" "}
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
          </div>
          <div className="absolute flex px-1 bg-center top-52 text-gray-600 left-36">
            <span className=" py-4 "> Tasks</span>
            <span className="py-4 pr-28 pl-72"> Status</span>
            <span className=" py-4 pl-28 pr-36 "> Date</span>
            <span className="pr-36 pl-28 py-4"> Time</span>
            <span> </span>
          </div>
          <div className="App bg-center h-screen flex justify-end items-center  bg-gray-50">
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
