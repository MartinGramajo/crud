import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import { useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';


const productosLocal = leerDeLocalStorage("productos") || [];




function App() {
  const [productos, setProductos] = useState(productosLocal);

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin productos={productos} setProductos={setProductos} />} />
        <Route path="/User" element={<User productos={productos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
