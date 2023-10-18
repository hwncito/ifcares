import React from "react";
import { Checkbox, Table } from "flowbite-react";

const MealTableRow = ({ student }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{student.number}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {student.name}
      </Table.Cell>
      <Table.Cell>{student.age}</Table.Cell>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>In</Table.Cell>
      <Table.Cell>Out</Table.Cell>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
      <Table.Cell>
        <Checkbox />
      </Table.Cell>
    </Table.Row>
  );
};

export default MealTableRow;
