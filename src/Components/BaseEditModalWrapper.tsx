import React, { memo } from "react";
import EditTodoModal from "./EditTodoModal";
import { BaseEditModalWrapperProps } from "./types/fileTypes";

const EditModalWrapper: React.FC<BaseEditModalWrapperProps> = ({
  onBackDropClick,
  showModal,
  status,
  date,
  setDate,
  setTime,
  time,
  todos,
  setTodos,
  editedTask,
  setEditedTask,
  todo,
  editedDate,
  editedTime,
  setEditedDate,
  setEditedTime,
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
        editedDate={editedDate}
        setEditedDate={setEditedDate}
        setEditedTime={setEditedTime}
        editedTime={editedTime}
        todos={todos}
        setTodos={setTodos}
        date={date}
        onBackDropClick={onBackDropClick}
        isCompleted={false}
        status={status}
        setDate={setDate}
        setTime={setTime}
        time={time}
        todo={todo}
        setEditedTask={setEditedTask}
        editedTask={editedTask}
      />
    </>
  );
};
export default memo(EditModalWrapper);
