import React from "react";
import EditTodoModal from "./EditTodoModal";
import { BaseEditModalWrapperProps } from "./types/fileTypes";

const EditModalWrapper: React.FC<BaseEditModalWrapperProps> = ({
  onBackDropClick,
  showModal,
  setTask,
  task,
  status,
  setStatus,
  handleAddTodo,
  date,
  setDate,
  setTime,
  time,
  submitEdits,
  todos,
  setTodos,
  editedTask,
  setEditedTask,
  editedTodo,
  setEditedTodo,
  todo,
  handelTimeChanges,
  editedDate,
  editedTime,
  setEditedDate,
  setEditedTime,
  handleDateChanges,
  handleChangeStatus,
  setEditedStatus,
  editedStatus,
}) => {
  if (!showModal) {
    return null;
  }
  return (
    <>
      <EditTodoModal
        setEditedStatus={setEditedStatus}
        editedStatus={editedStatus}
        handleChangeStatus={handleChangeStatus}
        editedDate={editedDate}
        setEditedDate={setEditedDate}
        setEditedTime={setEditedTime}
        editedTime={editedTime}
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
        todos={todos}
        setTodos={setTodos}
        date={date}
        onBackDropClick={onBackDropClick}
        id={""}
        task={task}
        setTask={setTask}
        isCompleted={false}
        handleAddTodo={handleAddTodo}
        setStatus={setStatus}
        status={status}
        setDate={setDate}
        setTime={setTime}
        time={time}
        todo={todo}
        submitEdits={submitEdits}
        setEditedTask={setEditedTask}
        editedTask={editedTask}
        handleDateChanges={handleDateChanges}
      />
    </>
  );
};
export default EditModalWrapper;
