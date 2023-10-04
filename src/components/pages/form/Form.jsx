import React from "react";
import "./Form.css";
import { Button, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Form = () => {
  let initialValues = {
    name: "",
    age: "",
    site: "",
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter a name."),
      age: Yup.number().required("Please enter an age.").positive().integer(),
    }),
    onSubmit,
  });

  return (
    <div className="body">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Add a New Student</h2>
        <TextField
          className="text-field"
          name="name"
          label="Name"
          variant="standard"
          type="text"
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name}
        />
        <TextField
          className="text-field"
          name="age"
          label="Age"
          variant="standard"
          type="number"
          onChange={handleChange}
          error={errors.age}
          helperText={errors.age}
        />
        <TextField
          className="text-field"
          name="site"
          select
          label="Site"
          variant="standard"
          type="number"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          style={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          Add
        </Button>
      </form>
      <div className="button-container">
      <Link to="/">
        <Button
          variant="contained"
          size="small"
          style={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          Back
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default Form;
