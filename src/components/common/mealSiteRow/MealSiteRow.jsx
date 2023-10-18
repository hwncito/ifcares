import React from "react";
import { Table } from "flowbite-react";

const MealSiteRow = ({ siteData }) => {
  return (
    // if (!siteData) {
    //   return null; // You can render some loading or default content here
    // }

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {siteData.name}
      </Table.Cell>
      <Table.Cell>{siteData.ceId}</Table.Cell>
      <Table.Cell>{siteData.siteName}</Table.Cell>
      <Table.Cell>{siteData.siteNumber}</Table.Cell>
      <Table.Cell>{siteData.date}</Table.Cell>
    </Table.Row>
  );
};

export default MealSiteRow;
