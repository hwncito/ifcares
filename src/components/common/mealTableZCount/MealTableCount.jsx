import React from "react";
import { Table } from "flowbite-react";
import MealTableCountRow from "../mealTableZCountRow/MealTableCountRow";

const MealTableCount = ({
  attendanceCount,
  breakfastCount,
  lunchCount,
  snackCount,
  supperCount,
}) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Total Program Participants</Table.HeadCell>
        <Table.HeadCell>Total breakfasts</Table.HeadCell>
        <Table.HeadCell>Total lunches</Table.HeadCell>
        <Table.HeadCell>Total snacks</Table.HeadCell>
        <Table.HeadCell>Total suppers</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <MealTableCountRow
          attendanceCount={attendanceCount}
          breakfastCount={breakfastCount}
          lunchCount={lunchCount}
          snackCount={snackCount}
          supperCount={supperCount}
        />
      </Table.Body>
    </Table>
  );
};

export default MealTableCount;
