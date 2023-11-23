import { Table } from "flowbite-react";
import React from "react";
import "./MealTableCountRow.css";

const MealTableCountRow = ({
  attendanceCount,
  breakfastCount,
  lunchCount,
  snackCount,
  supperCount,
}) => {
  return (
    <>
      <Table.Row >
        <Table.Cell className="number">{attendanceCount}</Table.Cell>
        <Table.Cell className="number">{breakfastCount}</Table.Cell>
        <Table.Cell className="number">{lunchCount}</Table.Cell>
        <Table.Cell className="number">{snackCount}</Table.Cell>
        <Table.Cell className="number">{supperCount}</Table.Cell>
      </Table.Row>
    </>
  );
};

export default MealTableCountRow;
