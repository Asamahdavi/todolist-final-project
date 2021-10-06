import moment from "moment";
import "date-fns";
import { TimePicker } from "antd";
import React, { memo } from "react";
import { TimePickerProps } from "./types/fileTypes";
import "antd/dist/antd.css";
export const TimePickerComponent = memo(
  ({ handelTimeChanges }: TimePickerProps) => {
    const d = new Date();
    const stringTime = moment(d).format("LTS");

    const nodeRef = React.useRef(null);
    return (
      <div ref={nodeRef}>
        <TimePicker
          className="h-auto w-28 cursor-pointer text-base m-0 p-1"
          defaultValue={moment(stringTime, "HH:mm:ss")}
          onChange={handelTimeChanges}
          suffixIcon
          style={{
            borderRadius: "2px",
          }}
        ></TimePicker>
      </div>
    );
  }
);
