import React from 'react';
import './Form.css';
import { Button, Select, TextField } from '@mui/material';

const Form = () => {
  return (
    <div className="body">
      <div className="form-container">
        <h2>Add a New Student</h2>
        <TextField
          className="textField"
          label="Name"
          variant="standard"
          type="text"
          required
        />
        <TextField
          className="textField"
          label="Age"
          variant="standard"
          type="number"
          required
        />
        <TextField
          className="textField"
          select
          label="Site"
          variant="standard"
          type="number"
          required
        />
        <Button
          variant="contained"
          size="small"
          style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Form;
