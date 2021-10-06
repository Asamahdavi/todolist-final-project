import { memo, useCallback, useEffect, useState } from "react";
import { Row } from "./Row";

import { data } from "./types/staticValues";
import BaseAddModalWrapper from "./BaseAddModalWrapper";
import { Todo } from "./types/fileTypes";
import moment from "moment";
import React from "react";
import { toUnicode } from "punycode";

export const Landing = memo(() => {
  //states
  let dateNow = new Date();
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>(data);
  const [date, setDate] = useState<string | null | undefined>(
    moment(dateNow).format("LL")
  );
  const formattedDate = moment(dateNow).format("HH:mm:ss");
  const [time, setTime] = useState<string | null | undefined>(formattedDate);
  const [status, setStatus] = useState<any>("In Progress");
  const [editedTask, setEditedTask] = useState("");
  const [editedTime, setEditedTime] = useState<string | null | undefined>();
  const [editedDate, setEditedDate] = useState<string | null | undefined>();
  const [editedStatus, setEditedStatus] = useState<any>();
  const [todosWeek, setTodosWeek] = useState<Todo[]>([]);
  const [truevalue, setTruevalue] = useState(true);
  const hasTodos = todos.length > 0;

  // filter values

  //UseEffect

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json || "{}");
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id && todo.isCompleted !== true) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
          status: "Completed",
          Completed: todo.status,
        };
      } else if (todo.id === id && todo.isCompleted === true) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
          status: "In Progress",
          "In Progress": todo.status,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const sortByWeek = () => {
    const now = new Date();
    const s1 = todos
      .filter(
        (todo: Todo) =>
          moment(todo.date).format().slice(5, 7) ===
          moment(now).format().slice(5, 7)
      )
      .map((todo: Todo) => {
        return { ...todo };
      });
    s1.sort((a, b) => (a.date as any) - (b.date as any));
    console.log(moment(now).format());
    console.log(s1);
    console.log(
      s1.sort(
        (a, b) =>
          (new Date(a.date as any) as any) - (new Date(b.date as any) as any)
      )
    );
    setTodos(s1);
  };
  const sortByDay = () => {
    const now = new Date();
    const s1 = todos
      .filter(
        (todo: Todo) =>
          moment(todo.date).format().slice(8, 10) ===
          moment(now).format().slice(8, 10)
      )
      .map((todo: Todo) => {
        return { ...todo };
      });
    console.log(moment(now).format());
    console.log(s1);
    setTodos(s1);
  };
  const sortbydidi = () => {
    const now = new Date();
    const s1 = todos
      .filter(
        (todo: Todo) =>
          moment(todo.date).format().slice(8, 10) ===
          moment(now).format().slice(8, 10)
      )
      .map((todo: Todo) => {
        return { ...todo };
      })
      .sort((a, b) => (a.date as any) - (b.date as any));

    console.log(moment(now).format());
    console.log(s1);
    setTodos(s1);
  };

  // const groupByDates = () => {
  //   const oneDay = 24 * 3600 * 1000;
  //   let today = new Date();
  //   today.setHours(0);
  //   today.setMinutes(0);
  //   today.setSeconds(0);
  //   today.setMilliseconds(0);
  //   const today2 = today.getTime();
  //   const toDtae = todos.map((todo: Todo) => {
  //     const t = new Date(todo.date);
  //   });
  //   const overdue = todos.filter((task) => new Date(task).getTime() < today);
  //   const todayTask = data.filter((task) => {
  //     const due = new Date(task).getTime();
  //     return due >= today && due < today + oneDay;
  //   });
  //   const tomorrow = data.filter((task) => {
  //     const due = new Date(task).getTime();
  //     return due >= today + oneDay && due < today + oneDay * 2;
  //   });
  //   const rest = data
  //     .filter((task) => new Date(task).getTime() >= today + oneDay * 2)
  //     .reduce((groups, d) => {
  //       const key = d?.toString().slice(0, 15);
  //       console.log(key);

  //       if (!groups[key]) {
  //         groups[key] = [];
  //       }
  //       groups[key].push(d);
  //       return groups;
  //     }, {});

  //   return { overdue, today: todayTask, tomorrow, rest: rest };
  // };

  const handleDeleteTodo = (id: string): void => {
    const updatedTodos = todos.filter((todo: { id: string }) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // const submitEdits = useCallback(
  //   (id: string) => {
  //     const updatedTodos = [...todos].map((todo) => {
  //       if (todo.id === id) {
  //         todo.task = editedTask;
  //       }
  //       return todo;
  //     });
  //     setTodos(updatedTodos);
  //     console.log(todos);
  //   },
  //   [editedTask, todos]
  // );

  const handleAddTodo = useCallback(
    (todo: Todo): void => {
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
      setTask("");
      console.log(updatedTodos);
    },
    [todos]
  );
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
  console.log("landing");
  return (
    <div>
      {
        <>
          <div className="landingP">
            <button
              className="btn-add-task shadow-md  h-14 sm:flex-row flex sm:flex-nowrap  flex-grow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={openCloseModal}
            >
              <span className="text-3xl pt-0  my-1"> +</span>
              <span className=" px-3  py-3 text-1xl ">Add Task</span>
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
            <button className="p-20 bg-black" onClick={() => sortByWeek()}>
              hryyyyyyy
            </button>
            <div className="absolute left-14 top-20">
              <button
                className="btn-Todo  hover:shadow-lg  hover:bg-gray-200 focus:bg-gray-200"
                value="uncomplete"
                onClick={() => setTruevalue(true)}
              >
                To Do
              </button>
            </div>
            <div className="absolute left-44 top-20 ">
              <button
                className="btn-Todo  hover:shadow-lg  hover:bg-gray-200 focus:bg-gray-200"
                value="completed"
                onClick={() => setTruevalue(false)}
              >
                Done
              </button>
            </div>
          </div>
          <div className="absolute flex  right-10 top-36">
            <button
              onClick={() => sortByWeek()}
              className=" btn-dateFilters  rounded-l border"
            >
              Mounth
            </button>
            <button className=" btn-dateFilters border">Week</button>
            <button
              onClick={() => sortByDay()}
              className=" btn-dateFilters  rounded-r border "
            >
              Day
            </button>
            <hr className="bg-black" />
          </div>

          <div className=" flex pt-40 lg:gap-x-40  xl:gap-x-80 xl:px-20 sm:gap-x-20 xl:space-x-1 md:pb-2 md:px-10 md:gap-x-32 sm:pb-2  sm:px-12 xl:pb-7  grid-cols-4 text-gray-600 left-36 text-xs font-sans font-medium border-b-2 2xl:gap-x-56   justify-between ">
            <div className="  pt-14 md:pr-2 ">
              <span className="w-7 text-righ justify-start "> Tasks</span>
            </div>
            <span className="text-right  pt-14 pl-3 "> Status</span>
            <span className=" text-right  pt-14  pl-2 pr-2"> Date</span>
            <span className="text-right   pt-14 pr-2 "> Time</span>
            <span className="text-right   pt-14 pr-2"> </span>
          </div>

          <div className=" bg-center h-screen flex justify-end items-center  ">
            <section className=" bg-left w-full lg:w-full px-14 flex flex-col items-center">
              <div className=" absolute bg-left w-full lg:w-full px-14 top-72 flex flex-col items-center">
                {/* {todos
                  .filter(
                    truevalue
                      ? (e) => e.isCompleted === false
                      : (e) => e.isCompleted === true
                  )
                  .map((todo, id) => (
                    <Row
                      key={id}
                      setEditedStatus={setEditedStatus}
                      editedStatus={editedStatus}
                      todo={todo}
                      handleDeleteTodo={handleDeleteTodo}
                      handleCheckTodo={handleCheckTodo}
                      todos={todos}
                      setTodos={setTodos}
                      editedTask={editedTask}
                      setEditedTask={setEditedTask}
                      setEditedDate={setEditedDate}
                      setEditedTime={setEditedTime}
                      editedDate={editedDate}
                      editedTime={editedTime}
                      setTime={setTime}
                      setDate={setDate}
                    />
                  ))} */}

                {!hasTodos && (
                  <p className="mb-5 text-xl text-red-500 uppercase">
                    Please add a todo!
                  </p>
                )}
                {hasTodos && <p></p>}
                {todos
                  .filter(
                    truevalue
                      ? (e) => e.isCompleted === false
                      : (e) => e.isCompleted === true
                  )
                  .map((todo, id) => (
                    <Row
                      key={id}
                      setEditedStatus={setEditedStatus}
                      editedStatus={editedStatus}
                      todo={todo}
                      handleDeleteTodo={handleDeleteTodo}
                      handleCheckTodo={handleCheckTodo}
                      todos={todos}
                      setTodos={setTodos}
                      editedTask={editedTask}
                      setEditedTask={setEditedTask}
                      setEditedDate={setEditedDate}
                      setEditedTime={setEditedTime}
                      editedDate={editedDate}
                      editedTime={editedTime}
                      setTime={setTime}
                      setDate={setDate}
                    />
                  ))}
              </div>
            </section>
          </div>
        </>
      }
    </div>
  );
});
// filter((todo)=> moment(todo.date).format("MM/ddd/yyyy").slice(3, 6)=== moment(date).format("MM/ddd/yyyy").slice(3, 6)? setTodos(todo): null)
