import moment from "moment";
import "date-fns";
import { DatePicker } from "antd";
import React from "react";
import { DatePickerProps } from "./types/fileTypes";
import "antd/dist/antd.css";
export const DatePickerComponent = ({
  setTime,
  setDate,
  date,
  time,
}: DatePickerProps) => {
  const handleDateChanges = (date: moment.Moment | null | undefined) => {
    let formattedDate = moment(date).format("LL");
    setDate(formattedDate);
    console.log(formattedDate);
  };
  const stringValue = moment(date).format("LL");
  const dateFormat = "LL";

  const nodeRef = React.useRef(null);
  return (
    <div ref={nodeRef}>
      <DatePicker
        defaultValue={moment(stringValue, dateFormat)}
        format={dateFormat}
        onChange={handleDateChanges}
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
      />
    </div>
  );
};
