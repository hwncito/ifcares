"use client";

import { Table } from "flowbite-react";
import "./StudentsRow.css";

export default function StudentsRow({ student }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {student.name}
      </Table.Cell>
      <Table.Cell>{student.age}</Table.Cell>
      <Table.Cell>{student.site}</Table.Cell>
      <Table.Cell>
        <a
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="/tables"
        >
          <p>Edit</p>
        </a>
      </Table.Cell>
    </Table.Row>
  );
}
