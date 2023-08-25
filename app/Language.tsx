"use client";
import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  return (
    <div className="flex items-center gap-1">
      <button
        className={`font-bold ${
          language === "EN" ? "text-white" : "text-[#FFA31D]"
        }`}
      >
        EN
      </button>
      <span className="text-white font-bold">/</span>
      <button
        className={`font-bold ${
          language === "ID" ? "text-white" : "text-[#FFA31D]"
        }`}
      >
        ID
      </button>
    </div>
  );
}

export default Language;
