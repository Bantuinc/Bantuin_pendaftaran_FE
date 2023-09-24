"use client";
import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");

  return (
    <div className="flex items-center gap-1">
      {/*<button*/}
      {/*  type="button"*/}
      {/*  onClick={() => setLanguage("EN")}*/}
      {/*  className={`font-bold ${*/}
      {/*    language === "EN" ? "text-[#FFA31D]" : "text-white"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  EN*/}
      {/*</button>*/}
      {/*<span className="text-white font-bold">/</span>*/}
      {/*<button*/}
      {/*  type="button"*/}
      {/*  onClick={() => setLanguage("ID")}*/}
      {/*  className={`font-bold ${*/}
      {/*    language === "ID" ? "text-[#FFA31D]" : "text-white"*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  ID*/}
      {/*</button>*/}
    </div>
  );
}

export default Language;
