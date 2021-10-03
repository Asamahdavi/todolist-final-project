import { RowType } from "./types/types";
import editIcon from "../assets/editIcon.png";
import ic from "../assets/icancel.png";

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
}: RowType) => (
  <div
    className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-700 " : "bg-gray-50"}
      `}
  >
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={() => handleCheckTodo(id)}
      className={"text-gray-400 rounded-sm "}
    />
    <p
      className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white" : "text-gray-800 line-through"}
        `}
    >
      {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-2">
      <button
        aria-label="Delete a todo"
        className="h-7 w-7 flex justify-center items-center hover:bg-gray-200  font-bold  rounded"
      >
        <img src={editIcon} alt="" />
      </button>
      <button
        aria-label="Delete a todo"
        className="h-7 w-7 flex justify-center items-center hover:bg-gray-200    font-bold  rounded"
      >
        <img src={ic} alt="" />
      </button>
    </div>
  </div>
);
