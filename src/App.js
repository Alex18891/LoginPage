import  React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cont from './pages/cont';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpass from './pages/forgotpass';
import Userdetail from './pages/userDetails';

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Cont/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />
          <Route path="/userDetails" element={<Userdetail/>} />
        </Routes>
  );
}