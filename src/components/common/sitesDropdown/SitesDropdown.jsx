'use client';

import React from 'react';
import { Dropdown } from 'flowbite-react';

const SitesDropdown = ({ sites, onSiteSelected, selectedSite }) => {
  return (
    <Dropdown
      dismissOnClick={true}
      label={selectedSite || 'Select Site'}
      style={{
        maxHeight: '30px',
        minWidth: '185px',
        borderRadius: '13px',
        background: '#f0f0f0',
        flexShrink: 0,
        color: '#000000',
        backgroundColor: '#F0F0F0',
        marginRight:'25px'
      }}
    >
      <Dropdown.Item onClick={() => onSiteSelected('')}>
        All Sites
      </Dropdown.Item>
      {sites.map((site) => (
        <Dropdown.Item
          key={site.spreadsheetId}
          onClick={() => onSiteSelected(site.name)}
        >
          {site.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default SitesDropdown;
