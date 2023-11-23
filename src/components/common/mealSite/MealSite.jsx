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
import useIsMobile from "../../../hooks/useIsMobile";
import MealList from '../mealList/MealList';

const MealSite = () => {
  const [sites, setSites] = useState([]);
  const { auth } = useAuth();
  const { selectedSite, setSelectedSite, siteData, setSiteData, studentData, setStudentData } = useContext(MealSiteContext);
  const isMobile = useIsMobile();

  const GAS_URL =
    'https://script.google.com/macros/s/AKfycbydLMqJketiihQlyAnRZB9IeXXsyqHpJga6K_meVD_YuqKVvr5EVLPgO7xKsEXNFK51/exec';

  useEffect(() => {
    console.log(selectedSite);
    if (selectedSite) {
      fetchDataForSelectedSite(selectedSite);
      fetchStudentForSelectedSite(selectedSite);
    } else {

      Promise.all([axios.get(GAS_URL + '?type=sites')])
        .then(([sitesResponse]) => {
          if (auth.role !== ROLES.Admin) {
            console.log("Sites: ", sitesResponse.data)
            const sites = sitesResponse.data.filter(item => item.name === auth.assignedSite)
            setSites(sites)
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
      {isMobile ? (
        <div className="w-full rounded-lg bg-white mb-4 shadow p-4">
          <p className="font-bold text-lg"> Name of Contracting Entity (CE)</p>
          <p className="text-lg">{siteData.name}</p>
          <br />

          <p className="font-bold text-lg">CE ID</p>
          <p className="text-lg">{siteData.ceId}</p>
          <br />

          <p className="font-bold text-lg"> Name of Site</p>
          <p className="text-lg">{siteData.siteName}</p>
          <br />

          <p className="font-bold text-lg">Site #</p>
          <p className="text-lg">{siteData.siteNumber}</p>
          <br />
        </div>
      ) : (

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
      )}

      <br />
      <MealList></MealList>
    </div>
  );
};

export default MealSite;
