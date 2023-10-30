import MealTableModal from "../mealTableModal/MealTableModal";
import { Table } from "flowbite-react";
import MealTableRow from "../mealTableRow/MealTableRow";
import { Button } from "@mui/material";
import React, { useState } from "react";
import MealTableCount from "../mealTableZCount/MealTableCount";
import "./MealTable.css";
// import dayjs from "dayjs";
//date select
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//time select
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const MealTable = ({ studentData, selectedSite }) => {
  if (!Array.isArray(studentData)) {
    studentData = [];
  }

  const [attendanceCount, setAttendanceCount] = useState(0);
  const [breakfastCount, setBreakfastCount] = useState(0);
  const [lunchCount, setLunchCount] = useState(0);
  const [snackCount, setSnackCount] = useState(0);
  const [supperCount, setSupperCount] = useState(0);

  const [selectedCheckboxData, setSelectedCheckboxData] = useState({});

  const [formattedData, setFormattedData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime1, setSelectedTime1] = useState(null);
  const [selectedTime2, setSelectedTime2] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dateError, setDateError] = useState(false);
  const [time1Error, setTime1Error] = useState(false);
  const [time2Error, setTime2Error] = useState(false);

  // const minTime = dayjs().hour(8).minute(5).second(0).millisecond(0);
  // const maxTime = dayjs().hour(19).minute(0).second(0).millisecond(0);

  const handleCheckboxChange = (studentNumber, checkboxState) => {
    setSelectedCheckboxData((prevState) => ({
      ...prevState,
      [studentNumber]: checkboxState,
    }));
  };

  const handleNextClick = () => {
    setDateError(!selectedDate);
    setTime1Error(!selectedTime1);
    setTime2Error(!selectedTime2);

    if (!selectedDate || !selectedTime1 || !selectedTime2) {
      return;
    }
    // Initialize an array to store the formatted data for each student
    const formattedData = studentData.map((student) => {
      const studentData = [student.number, student.name, student.age];

      // Check if selectedCheckboxData exists for this student
      if (selectedCheckboxData[student.number]) {
        // Add checkbox values to the array
        studentData.push(
          selectedCheckboxData[student.number].attendance,
          selectedCheckboxData[student.number].breakfast,
          selectedCheckboxData[student.number].lunch,
          selectedCheckboxData[student.number].snack,
          selectedCheckboxData[student.number].supper
        );
      } else {
        // If selectedCheckboxData doesn't exist, add false values for checkboxes
        studentData.push(false, false, false, false, false);
      }

      return studentData;
    });

    setFormattedData(formattedData);

    setIsModalOpen(true);
  };

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell className="mealTable-headcell">Date</Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell">In</Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell">Out</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Cell>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <div className="dateTimeError-container">
                  <div className={dateError ? "input-error" : ""}>
                    <DatePicker
                      value={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setDateError(false); // reset error when a date is selected
                      }}
                      required
                    />
                  </div>
                  {dateError && (
                    <span style={{ color: "red" }}>Date is required</span>
                  )}
                </div>
              </DemoContainer>
            </LocalizationProvider>
          </Table.Cell>
          <Table.Cell>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <div className="dateTimeError-container">
                  <div className={time1Error ? "input-error" : ""}>
                    <TimePicker
                      value={selectedTime1}
                      onChange={(time) => {
                        setSelectedTime1(time);
                        setTime1Error(false); // reset error when a time is selected
                      }}
                      required
                      // minTime={minTime}
                      // maxTime={maxTime}
                    />
                  </div>
                  {time1Error && (
                    <span style={{ color: "red" }}>Time In is required</span>
                  )}
                </div>
              </DemoContainer>
            </LocalizationProvider>
          </Table.Cell>
          <Table.Cell>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <div className="dateTimeError-container">
                  <div className={time2Error ? "input-error" : ""}>
                    <TimePicker
                      value={selectedTime2}
                      onChange={(time) => {
                        setSelectedTime2(time);
                        setTime2Error(false); // reset error when a time is selected
                      }}
                      required
                      // minTime={minTime}
                      // maxTime={maxTime}
                    />
                  </div>
                  {time2Error && (
                    <span style={{ color: "red" }}>Time Out is required</span>
                  )}
                </div>
              </DemoContainer>
            </LocalizationProvider>
          </Table.Cell>
        </Table.Body>
      </Table>

      <br />
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="mealTable-headcell">#</Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell">
            Participant's Name
          </Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell">Age</Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell checkbox">
            At
          </Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell checkbox">
            Brk
          </Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell checkbox">
            Lu
          </Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell checkbox">
            Snk
          </Table.HeadCell>
          <Table.HeadCell className="mealTable-headcell checkbox">
            Sup
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {studentData.map((student) => (
            <MealTableRow
              student={student}
              key={student.name}
              setAttendanceCount={setAttendanceCount}
              setBreakfastCount={setBreakfastCount}
              setLunchCount={setLunchCount}
              setSnackCount={setSnackCount}
              setSupperCount={setSupperCount}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </Table.Body>
      </Table>
      <br />
      <div className="button-container">
        <Button
          variant="contained"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            backgroundColor: "#3DED97",
            borderRadius: "13px",
            minWidth: "130px",
            minHeight: "40px",
            boxShadow: "none",
          }}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
      <br />
      <MealTableCount
        attendanceCount={attendanceCount}
        breakfastCount={breakfastCount}
        lunchCount={lunchCount}
        snackCount={snackCount}
        supperCount={supperCount}
      />
      {isModalOpen && (
        <MealTableModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          formattedData={formattedData}
          selectedDate={selectedDate}
          selectedTime1={selectedTime1}
          selectedTime2={selectedTime2}
          selectedSite={selectedSite}
        />
      )}
    </>
  );
};

export default MealTable;
