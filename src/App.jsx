// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import Holidays from './pages/Holidays';
// import Holidays from './components/Holidays';
import LeaveAdmin from './pages/LeavesAdmin';

import LeavesEmployee from './pages/LeavesEmployee';
import LeaveSettings from './pages/LeaveSetting';
// import LeaveEmployee from './components/LeaveEmployee';
// import LeaveSettings from './components/LeaveSettings';
import AttendanceAdmin from './pages/AttendenceAdmin';
import AttendanceEmployee from './pages/AttendaceEmployee';
import Navbar from "./Navbar";
import Login from './pages/Login';

function App() {
  const base="/"
  return (
    <Router basename={base}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/employees" element={<Employees/>} />
          <Route path="/holidays" element={<Holidays/>} />
          <Route path="/leave-admin" element={<LeaveAdmin/>} />
          <Route path="/leave-employee" element={<LeavesEmployee/>} />
          <Route path="/leave-settings" element={<LeaveSettings/>} />
          <Route path="/attendance-admin" element={<AttendanceAdmin/>} />
          <Route path="/attendance-employee" element={<AttendanceEmployee/>} />
          <Route path="/login" element={<Login/>} />

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
