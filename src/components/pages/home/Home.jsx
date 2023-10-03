import React from 'react';
import { Button, TextField } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <div className="body">
      <div className="nav">
        <div className="title-container">
          <div className="text-group">
            <h3>Students</h3>
            <div className="filter-group">
              <label htmlFor="">Site:</label>
              <TextField
                className="text-field"
                select
                variant="standard"
                type="text"
                required
              />
            </div>
          </div>
          <Button
            variant="contained"
            size="small"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            Add Student
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
