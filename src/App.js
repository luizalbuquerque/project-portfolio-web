import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o componente Routes

import Sidebar from './components/Sidebar';
import Members from './components/Members';
import Person from './components/Person';
import Project from './components/project/Project';
import './App.css'; // Certifique-se de importar seus estilos aqui

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          {/* Use o componente Routes para definir suas rotas */}
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/person" element={<Person />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
