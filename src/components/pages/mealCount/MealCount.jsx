import React from 'react';

import MealSite from '../../common/mealSite/MealSite';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './MealCount.css';

const MealCount = () => {
  return (
    <div className="mealCount-body">
      <div className="navigation-container">
        <h2 className="title">Daily Meal Count and Attendance Record</h2>
        <Link to="/">
          <Button
            variant="contained"
            style={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              backgroundColor: '#5D24FF',
              borderRadius: '13px',
              minWidth: '130px',
              minHeight: '40px',
              boxShadow: 'none',
            }}
          >
            Students Table
          </Button>
        </Link>
      </div>

      <MealSite />
    </div>
  );
};

export default MealCount;
