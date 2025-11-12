import React from "react";
import { AdminDashboard } from "./AdminDashboard"; // named export

function AdminDashboardWrapper() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow">
        {/* Directly show the admin dashboard without EEG upload logic */}
        <AdminDashboard />
      </div>
    </div>
  );
}

export default AdminDashboardWrapper;
