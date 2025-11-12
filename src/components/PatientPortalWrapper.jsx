import React from "react";
import { PatientPortal } from "./PatientPortal"; // named export

function PatientPortalWrapper() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow">
        {/* Directly show the patient portal without EEG upload logic */}
        <PatientPortal />
      </div>
    </div>
  );
}

export default PatientPortalWrapper;
