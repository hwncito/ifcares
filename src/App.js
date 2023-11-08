import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';

import RequireAuth from './components/auth/RequireAuth';

import Home from './components/pages/home/Home';
import Form from './components/pages/form/Form';
import MealCount from './components/pages/mealCount/MealCount';
import Login from './components/pages/login/Login';

import { ROLES } from './constants';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/ifcares">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
              <Route exact path='/home' element={<Home />} />
              <Route path="/addStudent" element={<Form />} />
              <Route path="/mealCount" element={<MealCount />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
