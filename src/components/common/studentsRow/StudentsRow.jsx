'use client';

import { Table } from 'flowbite-react';
import './StudentsRow.css';
import DeleteModal from '../deleteModal/DeleteModal';
import { useState } from 'react';

export default function StudentsRow({ student }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
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
        <Table.Cell>
          <button
            className="font-medium text-red-600 hover:underline dark:text-red-500"
            onClick={() => setShowDeleteModal(true)} 
          >
            Delete
          </button>
        </Table.Cell>
      </Table.Row>
      {showDeleteModal && (
        <DeleteModal student={student} onClose={() => setShowDeleteModal(false)} /> 
      )}
    </>
  );
}
