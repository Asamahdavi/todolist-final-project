import { useState } from "react";

import { Row } from "./Row";
import { data } from "./types/staticTodos";
import { TodoType } from "./types/fileTypes";

export const Landing = () => {
  const [todos, setTodos] = useState<TodoType[]>(data);
  const hasTodos = todos.length > 0;

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

  return (
    <div className="bg-center h-screen flex justify-end items-center ">
      <section className=" bg-left w-full lg:w-full px-14 flex flex-col items-center">
        <div className=" absolute bg-left w-full lg:w-full px-14 top-72 flex flex-col items-center">
          {todos.map((todo) => (
            <Row todo={todo} handleCheckTodo={handleCheckTodo} />
          ))}
          {!hasTodos && (
            <p className="mb-5 text-xl text-blue-600 uppercase">
              Please add a todo!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
