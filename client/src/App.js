import "./App.css";
import DayList from "./component/DayList";
import Header from "./component/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Words from "./component/Words";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CrateDay from "./component/CrateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Vocabulary</h1>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/word/:day" element={<Words />} />
          <Route path="/create-word" element={<CreateWord />} />
          <Route path="/create-day" element={<CrateDay />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
