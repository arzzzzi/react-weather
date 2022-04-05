
import React from "react";
import {Routes, Route} from 'react-router'
import { Statistics } from "./pages/statictics/components/Statistics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"/>
        <Route path="/statistics" />
      </Routes>
    </div>
  );
}

export default App;
