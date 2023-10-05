import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import axios from 'axios';

const SitesSelect = ({
  onSiteSelected,
  error,
  helperText,
  selectedSiteValue,
}) => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState('');

  useEffect(() => {
    setSelectedSite(selectedSiteValue);
  }, [selectedSiteValue]);

  useEffect(() => {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbwCgcCMHEBBcAD0CT9USGuJNi0I9qnKflPWP-lSTmBEOkg3bIvwK3M3dJCnbRZaQ-X0/exec?type=sites'
      )
      .then((response) => {
        setSites(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sites:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedSite(event.target.value);
    if (onSiteSelected) onSiteSelected(event.target.value);
  };

  return (
    <FormControl fullWidth error={error} style={{ width: '75%' }}>
      <InputLabel id="sites-select-label">Site</InputLabel>
      <Select
        labelId="sites-select-label"
        id="sites-select"
        value={selectedSite}
        label="site"
        onChange={handleChange}
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
