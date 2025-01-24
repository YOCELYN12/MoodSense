import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </div>
  );
};

export default Routing;
