import React, { useState } from 'react';
import { Checkbox, Table } from 'flowbite-react';
import './MealTableRow.css';

const MealTableRow = ({
  student,
  setAttendanceCount,
  setBreakfastCount,
  setLunchCount,
  setSnackCount,
  setSupperCount,
  onCheckboxChange,
}) => {
  const [checkboxState, setCheckboxState] = useState({
    attendance: false,
    breakfast: false,
    lunch: false,
    snack: false,
    supper: false,
  });

  const handleCheckboxChange = (category, checked) => {
    const updatedCheckboxState = {
      ...checkboxState,
      [category]: checked,
    };

    // Update the local state
    setCheckboxState(updatedCheckboxState);

    // Pass the updated state to the parent component
    onCheckboxChange(student.number, updatedCheckboxState);

    switch (category) {
      case 'attendance':
        setAttendanceCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      case 'breakfast':
        setBreakfastCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      case 'lunch':
        setLunchCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
        break;
      case 'snack':
        setSnackCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
        break;
      case 'supper':
        setSupperCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <Table.Row>
      <Table.Cell className="mealTableRow-style">{student.number}</Table.Cell>
      <Table.Cell className="mealTableRow-style">{student.name}</Table.Cell>
      <Table.Cell className="mealTableRow-style">{student.age}</Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.attendance}
          onChange={(event) =>
            handleCheckboxChange('attendance', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.breakfast}
          onChange={(event) =>
            handleCheckboxChange('breakfast', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.lunch}
          onChange={(event) =>
            handleCheckboxChange('lunch', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.snack}
          onChange={(event) =>
            handleCheckboxChange('snack', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.supper}
          onChange={(event) =>
            handleCheckboxChange('supper', event.target.checked)
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default MealTableRow;
