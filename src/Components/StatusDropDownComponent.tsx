import { Select } from "antd";
import { StatusProps } from "./types/fileTypes";

export const StatusDropDownComponent = ({
  handleChangeStatus,
}: StatusProps) => {
  const { Option } = Select;

  return (
    <div>
      <div className="w-full ">
        <div className="sm:grid sm:grid-cols-5 lg:flex lg:justify">
          {/* <div className=""></div>
          <div className="col-md-6">  */}
          <Select
            className="border-none w-28"
            defaultValue="In progress"
            // style={{ width: 112, border: "none" }}
            onChange={handleChangeStatus}
          >
            <Option value="In Progress">In Progress</Option>
            <Option value="Pause">Pause</Option>
          </Select>
        </div>
        {/* <div className="col-md-4"></div> */}
      </div>
    </div>
    // </div>
  );
};
