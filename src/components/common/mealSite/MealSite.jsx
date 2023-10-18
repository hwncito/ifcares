import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import MealSiteRow from "../mealSiteRow/MealSiteRow";
import SitesDropdown from "../sitesDropdown/SitesDropdown";
import axios from "axios";
import MealTable from "../mealTable/MealTable";

const MealSite = () => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [siteData, setSiteData] = useState("");
  const [studentData, setStudentData] = useState("");

  const GAS_URL =
    "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbyOKJ9ZLwpQglyu4DPVuIvuGJ_xwWagLgqdKGLIae5Ay-2aAJ6sFjmcotL6P1CyHpJL/exec";

  useEffect(() => {
    Promise.all([axios.get(GAS_URL + "?type=sites")])
      .then(([sitesResponse]) => {
        setSites(sitesResponse.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const fetchDataForSelectedSite = (site) => {
    // Make an API request with the selected site as a parameter
    axios
      .get(GAS_URL + `?type=siteData&site=${site}`)
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching site data:", error);
      });
  };

  // When the selected site changes, fetch data for the new site
  useEffect(() => {
    if (selectedSite) {
      fetchDataForSelectedSite(selectedSite);
    }
  }, [selectedSite]);

  const fetchStudentForSelectedSite = (site) => {
    // Make an API request with the selected site as a parameter
    axios
      .get(GAS_URL + `?type=studentData&site=${site}`)
      .then((response) => {
        console.log(response.data);
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching site data:", error);
      });
  };

  useEffect(() => {
    if (selectedSite) {
      fetchStudentForSelectedSite(selectedSite);
    }
  }, [selectedSite]);

  return (
    <>
      <SitesDropdown
        sites={sites}
        onSiteSelected={setSelectedSite}
        selectedSite={selectedSite}
      />
      <br />
      <Table>
        <Table.Head>
          <Table.HeadCell>Name of Contracting Entity (CE)</Table.HeadCell>
          <Table.HeadCell>CE ID</Table.HeadCell>
          <Table.HeadCell>Name of Site</Table.HeadCell>
          <Table.HeadCell>Site #</Table.HeadCell>
          <Table.HeadCell>Date (mm/dd/yyyy)</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <MealSiteRow siteData={siteData} />
        </Table.Body>
      </Table>
      <br />
      <MealTable studentData={studentData} />
    </>
  );
};

export default MealSite;
