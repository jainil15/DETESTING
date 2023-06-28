import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import SignUpForm from './signupform';
import FileList from './FileList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Sign-up" element={<SignUpForm/>} />
        <Route path="/file-list" element={<FileList/>} />
      </Routes>
    </Router>
  );
};

export default App;

