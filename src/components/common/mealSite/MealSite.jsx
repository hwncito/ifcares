import React from 'react'
import { Table } from 'flowbite-react';
import MealSiteRow from '../mealSiteRow/MealSiteRow';

const MealSite = () => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>
        Name of Contracting Entity (CE)
        </Table.HeadCell>
        <Table.HeadCell>
        CE ID
        </Table.HeadCell>
        <Table.HeadCell>
        Name of Site
        </Table.HeadCell>
        <Table.HeadCell>
        Site #
        </Table.HeadCell>
        <Table.HeadCell>
        Date (mm/dd/yyyy)
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <MealSiteRow />
      </Table.Body>
    </Table>
  )
}

export default MealSite