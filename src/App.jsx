import { Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage';
import FindProperty from './Pages/FindPropertyPage';
import About from './Pages/AboutPage';
import AdminDashboard from './components/AdminPanel/AdminDashboard';

import './App.css';
import Developer from './Pages/Developer';
import DeveloperTable from './components/AdminPanel/DeveloperTable';
import ChecksDashboard from './components/AdminPanel/ChecksDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindProperty />} />
        <Route path="/about" element={<About />} />
        <Route path='/developer' element={<Developer />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-developers" element={<DeveloperTable/>} />
        <Route path="/contracts" element={<ChecksDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
