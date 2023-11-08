import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { ROLES } from "../../../constants";

const SitesSelect = ({
  onSiteSelected,
  error,
  helperText,
  selectedSiteValue,
  isStudentsRow,
}) => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");

  const { auth } = useAuth()

  useEffect(() => {
    setSelectedSite(selectedSiteValue);
  }, [selectedSiteValue]);

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyQX7V9R8g1VEMAww_G8UMW9iTQyewe1CcZi90-SU0YFne3xTg5Qa_40lbqWp2w6Tlu/exec?type=sites"
      )
      .then((response) => {
        if (auth.role !== ROLES.Admin) {
          const sites = response.data.filter(item => item.name === auth.assignedSite)
          setSites(sites);
        } else {
          setSites(response.data)
        }
      })
      .catch((error) => {
        console.error("Error fetching sites:", error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedSite(event.target.value);
    if (onSiteSelected) onSiteSelected(event.target.value);
  };

  return (
    <FormControl fullWidth error={error} style={{ width: "75%" }}>
      <InputLabel
        
        style={{
          // conditional styling based on the page
          display: isStudentsRow ? "none" : "inherit",
        }}
        id="sites-select-label"
      >
        Site
      </InputLabel>
      <Select
        labelId="sites-select-label"
        id="sites-select"
        value={selectedSite}
        label="site"
        onChange={handleChange}
        style={{
          // conditional styling based on the page
          backgroundColor: isStudentsRow ? "#FFFFFF" : "inherit",
          // border: isStudentsRow ? "solid #e2e8f0 1px" : "inherit",
          // borderRadius: isStudentsRow ? "0.375rem" : "inherit"
        }}
      >
        {sites.map((site) => (
          <MenuItem key={site.spreadsheetId} value={site.name}>
            {site.name}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SitesSelect;
