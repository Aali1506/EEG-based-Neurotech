import React from "react";
import EEGPredict from "./EEGPredict";

const EEGUploadWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-50">
      {/* EEG Upload Page Content */}
      <EEGPredict />
    </div>
  );
};

export default EEGUploadWrapper;
