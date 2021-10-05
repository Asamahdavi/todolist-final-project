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
  }
);
//
