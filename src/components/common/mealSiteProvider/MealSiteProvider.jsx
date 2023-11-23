import React, { createContext, useState } from 'react';

export const MealSiteContext = createContext();

export const MealSiteProvider = ({ children }) => {
  const [selectedSite, setSelectedSite] = useState('');
  const [siteData, setSiteData] = useState('');
  const [lastTimeIn, setLastTimeIn] = useState(null);
  const [lastTimeOut, setLastTimeOut] = useState(null);
  const [studentData, setStudentData] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime1, setSelectedTime1] = useState(null);
  const [selectedTime2, setSelectedTime2] = useState(null);
  const [selectedCheckboxData, setSelectedCheckboxData] = useState({});
  const [globalCounts, setGlobalCounts] = useState({
    attendance: 0,
    breakfast: 0,
    lunch: 0,
    snack: 0,
    supper: 0,
  });

  const updateGlobalCount = (category, isChecked) => {
    setGlobalCounts((prevCounts) => ({
      ...prevCounts,
      [category]: isChecked
        ? prevCounts[category] + 1
        : prevCounts[category] - 1,
    }));
  };

  const handleCheckboxChange = (studentNumber, checkboxState) => {
    setSelectedCheckboxData((prevState) => ({
      ...prevState,
      [studentNumber]: checkboxState,
    }));
  };

  return (
    <MealSiteContext.Provider
      value={{
        selectedSite,
        setSelectedSite,
        siteData,
        setSiteData,
        lastTimeIn,
        setLastTimeIn,
        lastTimeOut,
        setLastTimeOut,
        studentData,
        setStudentData,
        selectedDate,
        setSelectedDate,
        selectedTime1,
        setSelectedTime1,
        selectedTime2,
        setSelectedTime2,
        selectedCheckboxData,
        handleCheckboxChange,
        updateGlobalCount,
        globalCounts,
      }}
    >
      {children}
    </MealSiteContext.Provider>
  );
};
