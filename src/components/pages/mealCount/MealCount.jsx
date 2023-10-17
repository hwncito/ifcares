import React from "react";
import MealTable from "../../common/mealTable/MealTable";
import MealSite from "../../common/mealSite/MealSite";

const MealCount = () => {
  return (
    <div>
      <h2>Daily Meal Count and Attendance Record: At-Risk</h2>
      <MealSite />
      <MealTable />
    </div>
  );
};

export default MealCount;
