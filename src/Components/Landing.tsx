import { memo, useCallback, useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { data } from "../types/staticValues";
import BaseAddModalWrapper from "./BaseAddModalWrapper";
import { Todo } from "../types/fileTypes";
import moment from "moment";

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
  const [status, setStatus] = useState<any>("In progress");
  const [editedTask, setEditedTask] = useState("");
  const [editedTime, setEditedTime] = useState<string | null | undefined>();
  const [editedDate, setEditedDate] = useState<string | null | undefined>();
  const [editedStatus, setEditedStatus] = useState<any>();
  const [filtering, setFiltering] = useState(6);
  const [todosWeek, setTodosWeek] = useState<Todo[]>([]);
  const [todosDay, setTodosDay] = useState<Todo[]>([]);
  const [todosMounth, setTodosMounth] = useState<Todo[]>([]);
  const [truevalue, setTruevalue] = useState(true);

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

  const filteringData = (filtering: number) => {
    if (filtering === 1) {
      sortByMounth();
      setFiltering(filtering);
    } else if (filtering === 2) {
      sortByWeek();
      setFiltering(filtering);
    } else if (filtering === 3) {
      sortByDay();
      setFiltering(filtering);
    }
    return setFiltering(filtering);
  };

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
  const sortByMounth = () => {
    const now = new Date();

    const s1 = todos
      .filter(
        (todo: Todo) =>
          moment(new Date(todo.date as string))
            .format("YYYY-MM-DD HH:mm:ss")
            .slice(5, 7) ===
          moment(now).format("YYYY-MM-DD HH:mm:ss").slice(5, 7)
      )
      .map((todo: Todo) => {
        return { ...todo };
      });
    s1.sort((a, b) => (a.date as any) - (b.date as any));
    setTodosMounth(s1);
  };
  const sortByDay = () => {
    const now = new Date();
    const s1 = todos
      .filter(
        (todo: Todo) =>
          moment(new Date(todo.date as string))
            .format("YYYY-MM-DD HH:mm:ss")
            .slice(5, 10) ===
          moment(now).format("YYYY-MM-DD HH:mm:ss").slice(5, 10)
      )
      .map((todo: Todo) => {
        return { ...todo };
      });
    s1.sort((a, b) => (a.date as any) - (b.date as any));
    setTodosDay(s1);
  };
  const sortByWeek = () => {
    const now = new Date();
    sortByMounth();
    const s1 = todosMounth
      .filter(
        (todo: Todo) =>
          moment(new Date(todo.date as string))
            .format("YYYY-MM-DD HH:mm:ss")
            .slice(8, 10) <
          moment(now).format("YYYY-MM-DD HH:mm:ss").slice(8, 10)
      )
      .map((todo: Todo) => {
        return { ...todo };
      })
      .sort((a, b) => (a.date as any) - (b.date as any));

    setTodosWeek(s1);
  };

  const handleDeleteTodo = (id: string): void => {
    const updatedTodos = todos.filter((todo: { id: string }) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = useCallback(
    (todo: Todo): void => {
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
      setTask("");
      setStatus("");
      setDate(null);
      setTime(null);
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
  const handleChangeStatus = (value: any) => {};

  return (
    <>
      {
        <div>
          {
            <>
              <div className="landingP ">
                <button className="btn-add-task" onClick={openCloseModal}>
                  <span className="plusSign"> +</span>
                  <span className="addtext">Add Task</span>
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
                    <div className="baseModalLanding"></div>
                  </>
                ) : null}
              </div>
              <div>
                <div className="btn-TodoStyle left-14 ">
                  <button
                    className="btn-Todo "
                    value="uncomplete"
                    onClick={() => setTruevalue(true)}
                  >
                    To Do
                  </button>
                </div>
                <div className="btn-TodoStyle left-44">
                  <button
                    className="btn-Todo "
                    value="completed"
                    onClick={() => setTruevalue(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
              <div className="absolute flex  right-10 top-36">
                <button
                  onClick={() => filteringData(1)}
                  className=" btn-dateFilters  rounded-l border"
                >
                  Mounth
                </button>
                <button
                  onClick={() => filteringData(2)}
                  className=" btn-dateFilters border"
                >
                  Week
                </button>
                <button
                  onClick={() => filteringData(3)}
                  className=" btn-dateFilters  rounded-r border "
                >
                  Day{" "}
                </button>
              </div>

              <div
                onClick={() => filteringData(7)}
                className="  landin-screen lg:gap-x-40  xl:gap-x-80 xl:px-20 sm:gap-x-20 xl:space-x-1 md:pb-2 md:px-10 md:gap-x-32 sm:pb-2  sm:px-12 xl:pb-7 2xl:gap-x-56  "
              >
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
                    <>
                      <TodoList
                        setEditedStatus={setEditedStatus}
                        editedStatus={editedStatus}
                        status={status}
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
                        todosWeek={todosWeek}
                        todosDay={todosDay}
                        filtering={filtering}
                        sortByWeek={sortByWeek}
                        sortByDay={sortByDay}
                        setTruevalue={setTruevalue}
                        trueValue={truevalue}
                        setTodosWeek={setTodosWeek}
                        setTodosDay={setTodosDay}
                        setFiltering={setFiltering}
                        todosMounth={todosMounth}
                        setStatus={setStatus}
                        todo={{
                          id: "",
                          status: status,
                          task: task,
                          isCompleted: false,
                          date: date,
                          time: time,
                        }}
                      />
                    </>
                  </div>
                </section>
              </div>
            </>
          }
        </div>
      }
    </>
  );
});
