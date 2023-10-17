import './Home.css';
import StudentsTable from '../../common/studentsTable/StudentsTable';

const Home = () => {
  return (
    <div className="body">
      <div>
        <StudentsTable />
      </div>
    </div>
  );
};

export default Home;
