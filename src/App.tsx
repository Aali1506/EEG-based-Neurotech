import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import HomePage from "./components/HomePage";
import PatientPortalWrapper from "./components/PatientPortalWrapper";
import AdminDashboardWrapper from "./components/AdminDashboardWrapper";
import EEGUploadWrapper from "./components/EEGUploadWrapper"; // ✅ use wrapper instead
import Header from "./components/Header";
import Footer from "./components/Footer"; // ✅ add footer

function App() {
  const { patient, admin } = useAuth();

  return (
    <Router>
      {/* ✅ Header appears on all pages */}
      <Header />

      {/* ✅ Page routes */}
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patient" element={<PatientPortalWrapper />} />
          <Route path="/admin" element={<AdminDashboardWrapper />} />
          <Route path="/eegupload" element={<EEGUploadWrapper />} /> {/* ✅ Updated route */}
        </Routes>
      </div>

      {/* ✅ Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
