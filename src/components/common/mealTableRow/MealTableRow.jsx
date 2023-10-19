import React from "react";
import { Checkbox, Table } from "flowbite-react";

const MealTableRow = ({
  student,
  setAttendanceCount,
  setBreakfastCount,
  setLunchCount,
  setSnackCount,
  setSupperCount,
}) => {
  const handleCheckboxChange = (category, checked) => {
    switch (category) {
      case "attendance":
        setAttendanceCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      case "breakfast":
        setBreakfastCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      case "lunch":
        setLunchCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
        break;
      case "snack":
        setSnackCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
        break;
      case "supper":
        setSupperCount((prevCount) =>
          checked ? prevCount + 1 : prevCount - 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{student.number}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {student.name}
      </Table.Cell>
      <Table.Cell>{student.age}</Table.Cell>
      <Table.Cell>
        <Checkbox onChange={(event) => handleCheckboxChange("attendance", event.target.checked)} />
      </Table.Cell>
      <Table.Cell>
        <Checkbox onChange={(event) => handleCheckboxChange("breakfast", event.target.checked)} />
      </Table.Cell>
      <Table.Cell>
        <Checkbox onChange={(event) => handleCheckboxChange("lunch", event.target.checked)} />
      </Table.Cell>
      <Table.Cell>
        <Checkbox onChange={(event) => handleCheckboxChange("snack", event.target.checked)} />
      </Table.Cell>
      <Table.Cell>
        <Checkbox onChange={(event) => handleCheckboxChange("supper", event.target.checked)} />
      </Table.Cell>
    </Table.Row>
  );
};

export default MealTableRow;
