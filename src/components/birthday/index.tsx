import { GlobalButton } from "../index";
import "./style.css";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
const BirthdayInput = ({ handleChange }: any) => {
  const birthdayInputChange = (date: any) => {
    handleChange(date);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    birthdayInputChange(dateString);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  return (
    <div>
      <div className="datePickerWrapper">
        <Space direction="vertical">
          <DatePicker
            style={{ width: "100%" }}
            onChange={onChange}
            showToday={false}
            disabledDate={disabledDate}
            allowClear={false}
          />
        </Space>
        <GlobalButton text={"Birthday"} />
      </div>
    </div>
  );
};

export default BirthdayInput;
