import './Form.css';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import SitesSelect from '../../common/sitesSelect/SitesSelect';

const Form = () => {
  let initialValues = {
    name: '',
    age: '',
    site: '',
  };

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  const { handleSubmit, handleChange, errors, values, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        name: Yup.string().required('Please enter a name.'),
        age: Yup.number().required('Please enter an age.').positive().integer(),
        site: Yup.string().required('Please select a Site.'),
      }),
      onSubmit,
    });

  const handleSiteSelection = (selectedSite) => {
    setFieldValue('site', selectedSite);
  };

  return (
    <div className="body">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="title">Add a New Student</h2>
        <TextField
          className="text-field"
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          
        />
        <TextField
          className="text-field"
          name="age"
          label="Age"
          variant="outlined"
          type="number"
          onChange={handleChange}
          error={!!errors.age}
          helperText={errors.age}
        />
        <SitesSelect
          onSiteSelected={handleSiteSelection}
          error={!!errors.site}
          helperText={errors.site}
          selectedSiteValue={values.site}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
        >
          Add
        </Button>
      </form>
      <div className="button-container">
        <Link to="/">
          <Button
            variant="contained"
            size="small"
            style={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
