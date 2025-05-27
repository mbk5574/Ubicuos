import React from 'react';
import DashboardCards from './components/DashboardCards';
import AlertList from './components/AlertList';
import AccidentMap from './components/AccidentMap';
import Aire from './pages/Aire';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '20px' }}>
        <h1 style={{ margin: 0 }}>Smart City Anthem - Vista Completa</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Dashboard general */}
        <section>
          <h2>Dashboard General</h2>
          <DashboardCards />
        </section>

        {/* Alertas */}
        <section style={{ marginTop: '40px' }}>
          <h2>Alertas del Sistema</h2>
          <AlertList />
        </section>

        {/* Mapa de Accidentes */}
        <section style={{ marginTop: '40px' }}>
          <h2>Mapa de Accidentes</h2>
          <AccidentMap />
        </section>

        {/* Módulo de Aire */}
        <section style={{ marginTop: '40px' }}>
          <h2>Calidad del Aire</h2>
          <Aire />
        </section>
      </main>
    </div>
  );
}

export default App;
