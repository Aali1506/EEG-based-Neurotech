
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full text-center py-4 mt-8"
      style={{
        background: "linear-gradient(90deg, #74ebd5, #ACB6E5)",
        color: "white",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <p className="text-sm font-medium leading-relaxed px-4">
        Developed by <span className="font-semibold">Aadithya Arunachalam</span>,{" "}
        <span className="font-semibold">Anapalli Arjun</span>,{" "}
        <span className="font-semibold">Varun Radhakrishnan</span>
      </p>
      <p className="text-xs mt-1 opacity-90">
        Department of AI & DS, SRM Valliammai Engineering College
      </p>
    </footer>
  );
};

export default Footer;
