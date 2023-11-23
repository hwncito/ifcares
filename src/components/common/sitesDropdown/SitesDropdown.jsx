"use client";

import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import "../studentsTable/StudentsTable.css";

const SitesDropdown = ({
  sites,
  onSiteSelected,
  selectedSite,
  additionalStyles,
  disableAllSites = false,
}) => {
  const [dropdownHeight, setDropdownHeight] = useState(getDropdownHeight());

  function getDropdownHeight() {
    return window.innerWidth < 640 ? "60px" : "40px"; // Assuming 640px as the breakpoint for phone devices
  }

  useEffect(() => {
    function handleResize() {
      setDropdownHeight(getDropdownHeight());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Dropdown
      dismissOnClick={true}
      label={selectedSite || "Select Site"}
      size="xlg"
      style={{
        minWidth: "185px",
        height: dropdownHeight,
        borderRadius: "13px",
        flexShrink: 0,
        color: "#000000",
        backgroundColor: "#FAFAFA",
        marginRight: "25px",
        ...additionalStyles,
      }}
      className="dropdown-label h-15 md:h-10"
    >
      {!disableAllSites && (
        <Dropdown.Item
          className="meal-count-btn"
          onClick={() => onSiteSelected("")}
        >
          All Sites
        </Dropdown.Item>
      )}
      {sites.map((site) => (
        <Dropdown.Item
          className="flex items-center justify-start bg-white py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white meal-count-btn"
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
