import "./Home.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import StudentsTable from "../../common/studentsTable/StudentsTable";


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
          <Link to="/addStudent">
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Add Student
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <StudentsTable />
      </div>
    </div>
  );
};

export default Home;
