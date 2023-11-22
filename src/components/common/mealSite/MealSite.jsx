import React, { useEffect, useState, useContext } from 'react';
import { Table } from 'flowbite-react';
import MealSiteRow from '../mealSiteRow/MealSiteRow';
import SitesDropdown from '../sitesDropdown/SitesDropdown';
import axios from 'axios';
import MealTable from '../mealTable/MealTable';
import './MealSite.css';
import useAuth from '../../../hooks/useAuth';
import { ROLES } from '../../../constants';
import { MealSiteContext } from '../mealSiteProvider/MealSiteProvider';

const MealSite = () => {
  const [sites, setSites] = useState([]);
  const { auth } = useAuth();
  const {
    selectedSite,
    setSelectedSite,
    setLastTimeIn,
    setLastTimeOut,
    siteData,
    setSiteData,
    studentData,
    setStudentData,
  } = useContext(MealSiteContext);

  const GAS_URL =
    'https://script.google.com/macros/s/AKfycbzGKeu4PGe4iUmPicnirgKG0eMn7Bn_fmgqLK9a_6oh6noixf7_o65DIi5JD-bne2E/exec';

  useEffect(() => {
    // console.log(selectedSite);
    if (selectedSite) {
      fetchDataForSelectedSite(selectedSite);
      fetchStudentForSelectedSite(selectedSite);
    } else {
      Promise.all([axios.get(GAS_URL + '?type=sites')])
        .then(([sitesResponse]) => {
          if (auth.role !== ROLES.Admin) {
            console.log('Sites: ', sitesResponse.data);
            const sites = sitesResponse.data.filter(
              (item) => item.name === auth.assignedSite
            );
            setSites(sites);
          } else {
            setSites(sitesResponse.data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [selectedSite]);

  const fetchDataForSelectedSite = (site) => {
    // Make an API request with the selected site as a parameter
    axios
      .get(GAS_URL + `?type=siteData&site=${site}`)
      .then((response) => {
        setSiteData(response.data);
        setLastTimeIn(response.data.lastTimeIn); // Assuming these fields exist in your response
        setLastTimeOut(response.data.lastTimeOut);
      })
      .catch((error) => {
        console.error('Error fetching site data:', error);
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
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching site data:', error);
      });
  };

  useEffect(() => {
    if (selectedSite) {
      fetchStudentForSelectedSite(selectedSite);
    }
  }, [selectedSite]);

  return (
    <div className="master-table-container">
      <SitesDropdown
        sites={sites}
        onSiteSelected={setSelectedSite}
        selectedSite={selectedSite}
        additionalStyles={{ border: 'solid 1px #3DED97' }}
        disableAllSites={true}
      />
      <br />
      <Table>
        <Table.Head>
          <Table.HeadCell className="mealSite-headcell">
            Name of Contracting Entity (CE)
          </Table.HeadCell>
          <Table.HeadCell className="mealSite-headcell">CE ID</Table.HeadCell>
          <Table.HeadCell className="mealSite-headcell">
            Name of Site
          </Table.HeadCell>
          <Table.HeadCell className="mealSite-headcell">Site #</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <MealSiteRow siteData={siteData} />
        </Table.Body>
      </Table>
      <br />
      <MealTable studentData={studentData} selectedSite={selectedSite} />
    </div>
  );
};

export default MealSite;
