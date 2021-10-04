import React from "react";
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
}) => {
  if (!showModal) {
    return null;
  }
  return (
    <>
      <AddTodo
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
export default BaseAddModalWrapper;
