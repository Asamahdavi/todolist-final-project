import React, { memo } from "react";
import { AddTodo } from "./AddModal";
import { BaseModalWrapperProps } from "./types/fileTypes";

const BaseAddModalWrapper: React.FC<BaseModalWrapperProps> = ({
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
  handelTimeChanges,
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
      <AddTodo
        setEditedStatus={setEditedStatus}
        editedStatus={editedStatus}
        handleChangeStatus={handleChangeStatus}
        handleDateChanges={handleDateChanges}
        handelTimeChanges={handelTimeChanges}
        handleAddTodo={handleAddTodo}
        onBackDropClick={onBackDropClick}
        setStatus={setStatus}
        task={task}
        setTask={setTask}
        status={status}
        date={date}
        time={time}
        setTime={setTime}
        setDate={setDate}
      />
    </>
  );
};
export default memo(BaseAddModalWrapper);
