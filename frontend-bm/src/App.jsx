import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
      <div className="App">
      <Router>

            <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={ <Signup/>} />
                <Route path = "/dashboard" element={<Dashboard/>}/>
            </Routes>

      </Router>
      </div>
  );
}

export default App;
