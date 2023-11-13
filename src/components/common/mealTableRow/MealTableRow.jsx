import React, {useContext } from 'react';
import { Checkbox, Table } from 'flowbite-react';
import './MealTableRow.css';
import { MealSiteContext } from '../mealSiteProvider/MealSiteProvider'; 



const MealTableRow = ({ student }) => {
  const { selectedCheckboxData, handleCheckboxChange, updateGlobalCount } = useContext(MealSiteContext);

  const checkboxState = selectedCheckboxData[student.number] || {
    attendance: false,
    breakfast: false,
    lunch: false,
    snack: false,
    supper: false,
  };

  const handleLocalCheckboxChange = (category, checked) => {
    const newCheckboxState = {
      ...checkboxState,
      [category]: checked,
    };
    handleCheckboxChange(student.number, newCheckboxState);

    updateGlobalCount(category, checked);
  };


    // // Update the local state
    // setCheckboxState(updatedCheckboxState);

    // // Pass the updated state to the parent component
    // onCheckboxChange(student.number, updatedCheckboxState);




  return (
    <Table.Row>
      <Table.Cell className="mealTableRow-style">{student.number}</Table.Cell>
      <Table.Cell className="mealTableRow-style">{student.name}</Table.Cell>
      <Table.Cell className="mealTableRow-style">{student.age}</Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.attendance}
          onChange={(event) =>
            handleLocalCheckboxChange('attendance', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.breakfast}
          onChange={(event) =>
            handleLocalCheckboxChange('breakfast', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.lunch}
          onChange={(event) =>
            handleLocalCheckboxChange('lunch', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.snack}
          onChange={(event) =>
            handleLocalCheckboxChange('snack', event.target.checked)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <Checkbox
          className="green-checkbox"
          checked={checkboxState.supper}
          onChange={(event) =>
            handleLocalCheckboxChange('supper', event.target.checked)
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};


export default MealTableRow;
