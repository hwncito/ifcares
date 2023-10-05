import React from 'react';
import './StudentsTable.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import StudentsRow from '../studentsRow/StudentsRow';
import SitesDropdown from '../sitesDropdown/SitesDropdown';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbwCgcCMHEBBcAD0CT9USGuJNi0I9qnKflPWP-lSTmBEOkg3bIvwK3M3dJCnbRZaQ-X0/exec?type=students'
      )
      .then((response) => {
        setStudents(response.data);
      });

    axios
      .get(
        'https://script.google.com/macros/s/AKfycbwCgcCMHEBBcAD0CT9USGuJNi0I9qnKflPWP-lSTmBEOkg3bIvwK3M3dJCnbRZaQ-X0/exec?type=sites'
      )
      .then((response) => {
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
