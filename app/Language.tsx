"use client"
import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  return (
    <div className="flex items-center gap-1">
      <button
        className={`font-bold ${
          language === "EN" ? "text-primary-dark" : "text-[#BFAD88]"
        }`}
      >
        EN
      </button>
      <span>/</span>
      <button className={`font-bold ${language === "ID" ? "text-primary-dark":"text-[#BFAD88]"}`}>ID</button>
    </div>
  );
}

export default Language;
