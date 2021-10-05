import { Select } from "antd";
import { StatusProps } from "./types/fileTypes";

export const StatusDropDownComponent = ({
  handleChangeStatus,
}: StatusProps) => {
  const { Option } = Select;

  return (
    <div>
      <div className="w-full ">
        <div className="grid grid-cols-5">
          <div className=""></div>
          <div className="col-md-6">
            <Select
              defaultValue="In progress"
              style={{ width: 120 }}
              onChange={handleChangeStatus}
            >
              <Option value="In Progress">In Progress</Option>
              <Option value="Pause">Pause</Option>
            </Select>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
