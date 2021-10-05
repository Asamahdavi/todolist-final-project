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
          defaultValue={moment(stringTime, "HH:mm:ss")}
          onChange={handelTimeChanges}
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
  }
);
