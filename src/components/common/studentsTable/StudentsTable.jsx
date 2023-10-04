import React from "react";
import "./StudentsTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import StudentsRow from "../studentsRow/StudentsRow";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyCKRtvcMX-_NahX-bC_ZGU4Gjrlx8Qyl_F1PEobp_q-bMEggtj3DJvQ_hESiSIjacA/exec"
      )
      .then((response) => {
        setStudents(response.data);
      });
  }, []);

  return (
    <div className="table-container">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Student Name</Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>Site</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {students.map((student) => {
            return <StudentsRow student={student} key={student.name} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentsTable;
