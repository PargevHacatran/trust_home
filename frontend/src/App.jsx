import { Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage';
import FindProperty from './Pages/FindPropertyPage';
import About from './Pages/AboutPage';
import Admin from "./components/AdminPanel/Dashboard/Admin"

import './App.css';
import Developer from './Pages/Developer';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindProperty />} />
        <Route path="/about" element={<About />} />
        <Route path='/developer' element={<Developer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signin" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
