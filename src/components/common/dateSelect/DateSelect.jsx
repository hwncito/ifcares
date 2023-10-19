import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateSelect = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateSelect;
