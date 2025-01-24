import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
