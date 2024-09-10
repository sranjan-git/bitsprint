/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengeDetails from "./pages/ChallengeDetails";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import BenefitsSection from "./components/BenefitsSection";
import Detail from "./pages/detail";
import ChallengesPage from "./pages/Filter";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main page route */}
        <Route path="/" element={<Home />} />

        {/* Challenge details route */}
        <Route path="/edit" element={<ChallengeDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/benefit" element={<BenefitsSection />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/filter" element={<ChallengesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
