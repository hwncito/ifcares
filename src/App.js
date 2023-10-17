import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Form from './components/pages/form/Form';
import MealCount from './components/pages/mealCount/MealCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/ifcares">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addStudent" element={<Form />} />
          <Route path="/mealCount" element={<MealCount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
