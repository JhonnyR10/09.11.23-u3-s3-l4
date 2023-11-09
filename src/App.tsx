import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div >
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path="/:articleid" element={<Detail />}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
