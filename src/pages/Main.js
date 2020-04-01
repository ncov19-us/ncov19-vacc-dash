import React from 'react';

import VaccineTable from './VaccineTable';

function Main() {
  return (
    <main className="container">
      <div className="columns is-centered is-gapless">
        <div className="column">
          <div className="columns is-9-desktop is-gapless main">
            <div className="column">
              <h1 className="title">Ncov-19 Vaccine Dashboard</h1>
              <VaccineTable />
            </div>
            <div className="column">
              <h2 className="title">Right Component</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;