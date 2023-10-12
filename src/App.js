import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Form from './components/pages/form/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"ifcares"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addStudent" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
