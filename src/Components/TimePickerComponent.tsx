import moment from "moment";
import "date-fns";
import { TimePicker } from "antd";
import React from "react";
import { DatePickerProps } from "./types/fileTypes";
import "antd/dist/antd.css";
export const TimePickerComponent = ({ setTime, date }: DatePickerProps) => {
  const d = new Date();
  const stringTime = moment(d).format("LTS");

  const handleTimeChanges = (time: moment.Moment | null | undefined) => {
    let formattedTime = moment(time).format("HH:mm:ss");
    setTime(formattedTime);
    console.log(formattedTime);
  };
  const nodeRef = React.useRef(null);
  return (
    <div ref={nodeRef}>
      <TimePicker
        defaultValue={moment(stringTime, "HH:mm:ss")}
        onChange={handleTimeChanges}
        suffixIcon
        style={{
          height: "auto",
          width: "auto",
          border: "none",
          borderRadius: "0px",
          cursor: "pointer",
          fontSize: "17px",
          margin: "0px",
          padding: "0px",
        }}
      ></TimePicker>
    </div>
  );
};
