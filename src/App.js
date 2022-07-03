import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/ContactComponent/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      Hello World
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
