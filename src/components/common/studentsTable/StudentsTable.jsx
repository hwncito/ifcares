import React from "react";
import "./StudentsTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import StudentsRow from "../studentsRow/StudentsRow";
import SitesDropdown from "../sitesDropdown/SitesDropdown";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbzZpXl2d_y2nnqm_G22L3AxoyPa7xBK7p_XUHzCE3Gzh15ioX4sQc9wjQkqQdDBcuvG/exec";

  useEffect(() => {
    axios.get(GAS_URL + "?type=students").then((response) => {
      setStudents(response.data);
    });

    axios.get(GAS_URL + "?type=sites").then((response) => {
      setSites(response.data);
    });
  }, []);

  return (
    <div className="table-container">
      <SitesDropdown
        sites={sites}
        onSiteSelected={setSelectedSite}
        selectedSite={selectedSite}
      />
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
          {students
            .filter((student) => !selectedSite || student.site === selectedSite)
            .map((student) => (
              <StudentsRow student={student} key={student.name} />
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentsTable;
