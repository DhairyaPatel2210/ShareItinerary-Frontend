import { useState } from "react";
import NavComp from "./NavComp";
import NavRoutes from "../router/routes";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <main className="h-screen flex flex-col">
      <NavComp className="flex-shrink-0" />
      <div className="flex-grow overflow-hidden">
        <NavRoutes />
      </div>
    </main>
  );
}

export default App;
