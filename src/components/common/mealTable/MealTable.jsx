import { Table } from "flowbite-react";
import MealTableRow from "../mealTableRow/MealTableRow";

const MealTable = ({ studentData }) => {
  if (!Array.isArray(studentData)) {
    studentData = [];
  }

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
          <Table.HeadCell>In</Table.HeadCell>
          <Table.HeadCell>Out</Table.HeadCell>
          <Table.HeadCell>Brk</Table.HeadCell>
          <Table.HeadCell>Lu</Table.HeadCell>
          <Table.HeadCell>Snk</Table.HeadCell>
          <Table.HeadCell>Sup</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {studentData.map((student) => (
            <MealTableRow student={student} key={student.name} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MealTable;
