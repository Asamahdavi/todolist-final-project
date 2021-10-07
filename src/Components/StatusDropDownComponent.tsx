import { Select } from "antd";
import { StatusProps } from "../types/fileTypes";

export const StatusDropDownComponent = ({
  handleChangeStatus,
  setStatus,
}: StatusProps) => {
  const { Option } = Select;
  // const change = (e: string) => {
  //   setStatus(e);
  //   console.log(e);
  // };

  return (
    <div>
      <div className="w-full ">
        <div className="sm:grid sm:grid-cols-5 lg:flex lg:justify">
          <Select
            className="border-none w-28"
            defaultValue="In progress"
            onChange={handleChangeStatus}
          >
            <Option value="In Progress">In Progress</Option>
            <Option value="Pause">Pause</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};
