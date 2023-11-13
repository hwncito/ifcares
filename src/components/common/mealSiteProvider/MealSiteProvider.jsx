import React, { createContext, useState } from 'react';

export const MealSiteContext = createContext();

export const MealSiteProvider = ({ children }) => {
    const [selectedSite, setSelectedSite] = useState('');
    const [siteData, setSiteData] = useState('');
    const [studentData, setStudentData] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime1, setSelectedTime1] = useState(null);
    const [selectedTime2, setSelectedTime2] = useState(null);

  return (
    <MealSiteContext.Provider value={{ selectedSite, setSelectedSite, siteData, setSiteData, studentData, setStudentData, selectedDate, setSelectedDate, selectedTime1, setSelectedTime1, selectedTime2, setSelectedTime2 }}>
      {children}
    </MealSiteContext.Provider>
  );
};
