import { Todo, TodolistProps } from "../types/fileTypes";
import { Row } from "./Row";

export const TodoList = ({
  filtering,
  todosWeek,
  todosDay,
  handleCheckTodo,
  setDate,
  setTime,
  setTodos,
  todos,
  setEditedTask,
  editedTask,
  editedDate,
  editedTime,
  setEditedDate,
  setEditedTime,
  setEditedStatus,
  editedStatus,
  handleDeleteTodo,
  trueValue,
  todosMounth,
  status,
  setStatus,
}: TodolistProps) => {
  const filterindatatodos = (
    todoFilter: Todo[],

    trueValue: boolean
  ) => {
    return todoFilter.filter((eachKey) => {
      if (trueValue) {
        return eachKey.isCompleted === false;
      } else {
        return eachKey.isCompleted === true;
      }
    });
  };

  return (
    <>
      {filtering === 1
        ? filterindatatodos(todosMounth, trueValue).map((todo, id) => (
            <Row
              key={id}
              setStatus={setStatus}
              setEditedStatus={setEditedStatus}
              editedStatus={editedStatus}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo}
              todos={todos}
              status={status}
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
          ))
        : filtering === 2
        ? filterindatatodos(todosWeek, trueValue).map((todo, id) => (
            <Row
              key={id}
              setStatus={setStatus}
              setEditedStatus={setEditedStatus}
              editedStatus={editedStatus}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo}
              todos={todos}
              status={status}
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
          ))
        : filtering === 3
        ? filterindatatodos(todosDay, trueValue).map((todo, id) => (
            <Row
              key={id}
              setStatus={setStatus}
              setEditedStatus={setEditedStatus}
              editedStatus={editedStatus}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo}
              todos={todos}
              status={status}
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
          ))
        : filterindatatodos(todos, trueValue).map((todo, id) => (
            <Row
              key={id}
              setStatus={setStatus}
              setEditedStatus={setEditedStatus}
              editedStatus={editedStatus}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo}
              todos={todos}
              status={status}
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
    </>
  );
};
