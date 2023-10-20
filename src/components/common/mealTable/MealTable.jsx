import { Table } from 'flowbite-react';
import MealTableRow from '../mealTableRow/MealTableRow';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import MealTableCount from '../mealTableZCount/MealTableCount';
import './MealTable.css';

const MealTable = ({ studentData }) => {
  if (!Array.isArray(studentData)) {
    studentData = [];
  }

  const [attendanceCount, setAttendanceCount] = useState(0);
  const [breakfastCount, setBreakfastCount] = useState(0);
  const [lunchCount, setLunchCount] = useState(0);
  const [snackCount, setSnackCount] = useState(0);
  const [supperCount, setSupperCount] = useState(0);

  const [selectedCheckboxData, setSelectedCheckboxData] = useState({});

  const handleCheckboxChange = (studentNumber, checkboxState) => {
    setSelectedCheckboxData((prevState) => ({
      ...prevState,
      [studentNumber]: checkboxState,
    }));
  };

  const handleNextClick = () => {
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
        // If selectedCheckboxData doesn't exist, add undefined values for checkboxes
        studentData.push(false, false, false, false, false);
      }

      return studentData;
    });

    console.log(formattedData);
  };

  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">#</Table.HeadCell>
          <Table.HeadCell>
            Participant's Name (First & Last Name Required)
          </Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>At</Table.HeadCell>
          <Table.HeadCell>Brk</Table.HeadCell>
          <Table.HeadCell>Lu</Table.HeadCell>
          <Table.HeadCell>Snk</Table.HeadCell>
          <Table.HeadCell>Sup</Table.HeadCell>
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
            textTransform: 'capitalize',
            fontWeight: 'bold',
            backgroundColor: '#3DED97',
            borderRadius: '13px',
            minWidth: '130px',
            minHeight: '40px',
            boxShadow: 'none',
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
    </>
  );
};

export default MealTable;
