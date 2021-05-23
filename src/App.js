import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="card-grid"></div>
      </main>
    </div>
  );
}

export default App;
