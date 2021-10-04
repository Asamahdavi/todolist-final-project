import { RowType } from "./types/fileTypes";
import editIcon from "../assets/editIcon.png";
import ic from "../assets/icancel.png";

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
}: RowType) => (
  <div
    className={`
    flex w-full p-4 mb-2 justify-between 
    ${isCompleted ? "bg-gray-400 border-b-2" : "bg-gray-50 border-b-2 h-20"}
   `}
  >
    <div className="grid absolute  pt-2">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="text-gray-400 rounded-sm"
      />
    </div>
    <p
      className={` pl-16
      ml-2 text-xl font-sans font-medium 
      ${isCompleted ? "text-white line-through" : "text-gray-800"}
    `}
    >
      {task}
    </p>
    <div className="w-1/6 pl-36 flex justify-between items-center mr-2">
      <div>
        <button
          aria-label="edit a todo"
          className="h-7 w-7 flex justify-center items-center hover:bg-gray-200  font-bold  rounded"
        >
          <img src={editIcon} alt="" />
        </button>
      </div>
      <button
        aria-label="Delete a todo"
        className="h-7 w-7 flex justify-center items-center hover:bg-gray-200    font-bold  rounded"
      >
        <img src={ic} alt="" />
      </button>
    </div>
  </div>
);
