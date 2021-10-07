import { TodolistProps } from "../types/fileTypes";
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
  return (
    <>
      {filtering === 1
        ? todosMounth
            .filter(
              trueValue
                ? (e) => e.isCompleted === false
                : (e) => e.isCompleted === true
            )
            .map((todo, id) => (
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
        ? todosWeek
            .filter(
              trueValue
                ? (e) => e.isCompleted === false
                : (e) => e.isCompleted === true
            )
            .map((todo, id) => (
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
        ? todosDay
            .filter(
              trueValue
                ? (e) => e.isCompleted === false
                : (e) => e.isCompleted === true
            )
            .map((todo, id) => (
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
        : todos
            .filter(
              trueValue
                ? (e) => e.isCompleted === false
                : (e) => e.isCompleted === true
            )
            .map((todo, id) => (
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
