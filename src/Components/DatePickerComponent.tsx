import moment from "moment";
import "date-fns";
import { DatePicker } from "antd";
import React, { memo } from "react";
import { DatePickerProps } from "./types/fileTypes";
import "antd/dist/antd.css";
export const DatePickerComponent = memo(
  ({ handleDateChanges }: DatePickerProps) => {
    const d = new Date();
    const stringValue = moment(d).format("LL");
    const dateFormat = "LL";

    const nodeRef = React.useRef(null);
    return (
      <div ref={nodeRef}>
        <DatePicker
          className="h-auto w-28 cursor-pointer text-base m-0 p-1 "
          inputReadOnly={true}
          defaultValue={moment(stringValue, dateFormat)}
          format={dateFormat}
          onChange={handleDateChanges}
          suffixIcon
          style={{ borderRadius: "2px" }}
        />
      </div>
    );
  }
);
//
