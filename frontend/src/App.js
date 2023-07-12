import React from 'react';
import Home from './components/home';
import Edit from './components/edit';
import Delete from './components/delete';
import Navbar from './components/navbar';
import Add from './components/add'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import View from './components/view';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>  
          <Route index element={<Home/>} />
          <Route path="/Newadd" element={<Add />} />
          <Route path="/about" element={<About/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/delete/:id" element={<Delete/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
