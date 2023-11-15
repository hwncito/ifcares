import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Table } from "flowbite-react";
import { Button } from "@mui/material";

import useAuth from "../../../hooks/useAuth";

import StudentsRow from "../studentsRow/StudentsRow";
import SitesDropdown from "../sitesDropdown/SitesDropdown";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

import { ROLES } from "../../../constants";

import "./StudentsTable.css";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [loading, setLoading] = useState(true);

  const { auth } = useAuth();

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbydLMqJketiihQlyAnRZB9IeXXsyqHpJga6K_meVD_YuqKVvr5EVLPgO7xKsEXNFK51/exec";

  useEffect(() => {
    Promise.all([
      axios.get(GAS_URL + "?type=students"),
      axios.get(GAS_URL + "?type=sites"),
    ])
      .then(([studentsResponse, sitesResponse]) => {
        if (auth.role !== ROLES.Admin) {
          const students = studentsResponse.data.filter(
            (item) => item.site === auth.assignedSite
          );
          const sites = sitesResponse.data.filter(
            (item) => item.name === auth.assignedSite
          );
          setStudents(students);
          setSites(sites);
          setLoading(false);
        } else {
          setStudents(studentsResponse.data);
          setSites(sitesResponse.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // return (
  //   <div className="body-container">
  //     <div className="table-container">
  //       <div className="header-container">
  //         <Link to="/mealCount">
  //           <Button
  //             variant="contained"
  //             style={{
  //               textTransform: 'capitalize',
  //               fontWeight: 'bold',
  //               backgroundColor: '#3DED97',
  //               borderRadius: '13px',
  //               minWidth: '130px',
  //               minHeight: '40px',
  //               boxShadow: 'none',
  //             }}
  //           >
  //             Meal Count
  //           </Button>
  //         </Link>
  //         <div className="drop-button-container">
  //           {auth.role === ROLES.Admin &&
  //             <SitesDropdown
  //               sites={sites}
  //               onSiteSelected={setSelectedSite}
  //               selectedSite={selectedSite}
  //             />
  //           }
  //           <Link to="/addStudent">
  //             <Button
  //               variant="contained"
  //               style={{
  //                 textTransform: 'capitalize',
  //                 fontWeight: 'bold',
  //                 backgroundColor: '#5D24FF',
  //                 borderRadius: '13px',
  //                 minWidth: '130px',
  //                 minHeight: '40px',
  //                 boxShadow: 'none',
  //               }}
  //             >
  //               Add Student
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //       {loading ? (
  //         <div className="loading-spinner">
  //           <LoadingSpinner />
  //         </div>
  //       ) : (
  //         <>
  //           <Table striped>
  //             <Table.Head>
  //               <Table.HeadCell className="headcell">
  //                 Student Name
  //               </Table.HeadCell>
  //               <Table.HeadCell className="headcell">Age</Table.HeadCell>
  //               <Table.HeadCell className="headcell">Site</Table.HeadCell>
  //               <Table.HeadCell className="headcell">
  //                 <span className="sr-only">Edit</span>
  //               </Table.HeadCell>
  //               <Table.HeadCell className="headcell">
  //                 <span className="sr-only">Delete</span>
  //               </Table.HeadCell>
  //             </Table.Head>
  //             <Table.Body className="divide-y">
  //               {students
  //                 .filter(
  //                   (student) => !selectedSite || student.site === selectedSite
  //                 )
  //                 .map((student) => (
  //                   <StudentsRow student={student} key={student.name} />
  //                 ))}
  //             </Table.Body>
  //           </Table>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className="body-container">
      <div className="table-container">
        <div className="header-container flex flex-col md:flex-row items-center justify-between">
          {/* This div will be full width on mobile and align the button to the end/right */}
          <div className="w-full flex justify-end md:justify-start md:w-auto -mt-12 md:-mt-[12px]">
            <Link to="/mealCount">
              <Button
                variant="contained"
                className="text-transform[capitalize] font-bold bg-[#3DED97] rounded-[13px] min-w-[130px] min-h-[40px] shadow-none"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  backgroundColor: "#3DED97",
                  borderRadius: "13px",
                  minWidth: "130px",
                  minHeight: "40px",
                  boxShadow: "none",
                }}
              >
                Meal Count
              </Button>
            </Link>
          </div>
          {/* This div will center the dropdown and button below the Meal Count button on mobile */}
          <div className="flex flex-row justify-center m-auto items-center w-full mt-4 md:justify-end md:mt-0 md:flex-row md:items-center">
            {auth.role === ROLES.Admin && (
              <SitesDropdown
                sites={sites}
                onSiteSelected={setSelectedSite}
                selectedSite={selectedSite}
                className="mb-4 md:mb-0 md:mr-4"
              />
            )}
            <Link to="/addStudent">
              <Button
                className="text-transform[capitalize] font-bold bg-[#5D24FF] rounded-[13px] min-w-[130px] min-h-[40px] shadow-none"
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  backgroundColor: "#5D24FF",
                  borderRadius: "13px",
                  minWidth: "130px",
                  minHeight: "40px",
                  boxShadow: "none",
                }}
              >
                Add Student
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="sm:block hidden">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell className="headcell">
                    Student Name
                  </Table.HeadCell>
                  <Table.HeadCell className="headcell">Age</Table.HeadCell>
                  <Table.HeadCell className="headcell">Site</Table.HeadCell>
                  <Table.HeadCell className="headcell">
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                  <Table.HeadCell className="headcell">
                    <span className="sr-only">Delete</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {students
                    .filter(
                      (student) =>
                        !selectedSite || student.site === selectedSite
                    )
                    .map((student) => (
                      <StudentsRow student={student} key={student.name} />
                    ))}
                </Table.Body>
              </Table>
            </div>
            <div className="block sm:hidden">
              {/* Mobile-friendly list */}
              {students
                .filter(
                  (student) => !selectedSite || student.site === selectedSite
                )
                .map((student) => (
                  <div
                    className="flex flex-col p-4 border-b bg-white rounded-lg mt-2"
                    key={student.name}
                  >
                    <span className="font-bold bg-white rounded-lg">
                      {student.name}
                    </span>
                    <span>Age: {student.age}</span>
                    <span>Site: {student.site}</span>
                    <div className="flex justify-end font-semibold">
                      <Button
                        style={{
                          marginTop: "-65px",
                          fontWeight: "semibold",
                          color: "#5D24FF",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{
                          marginTop: "-65px",
                          fontWeight: "semibold",
                          color: "#E02424",
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentsTable;
