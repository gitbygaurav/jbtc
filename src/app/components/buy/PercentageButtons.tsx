"use client"

import { useState } from "react";
import clsx from "clsx";

export default function PercentageButtons() {
  const [activeButton, setActiveButton] = useState<string>("Min");
  
  return (
    <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 mt-2">
      <button 
        onClick={() => setActiveButton("Min")} 
        className={clsx(
          "text-xs font-medium rounded-full py-1 px-3 sm:px-4 transition-all",
          activeButton === "Min" 
            ? "bg-[#2D87F1] text-white" 
            : "bg-[#F2FAFF] text-[#002540]"
        )}
      >Min</button>
      <button 
        onClick={() => setActiveButton("25%")} 
        className={clsx(
          "text-xs font-medium rounded-full py-1 px-3 sm:px-4 transition-all",
          activeButton === "25%" 
            ? "bg-[#2D87F1] text-white" 
            : "bg-[#F2FAFF] text-[#002540]"
        )}
      >25%</button>
      <button 
        onClick={() => setActiveButton("50%")} 
        className={clsx(
          "text-xs font-medium rounded-full py-1 px-3 sm:px-4 transition-all",
          activeButton === "50%" 
            ? "bg-[#2D87F1] text-white" 
            : "bg-[#F2FAFF] text-[#002540]"
        )}
      >50%</button>
      <button 
        onClick={() => setActiveButton("Max")} 
        className={clsx(
          "text-xs font-medium rounded-full py-1 px-3 sm:px-4 transition-all",
          activeButton === "Max" 
            ? "bg-[#2D87F1] text-white" 
            : "bg-[#F2FAFF] text-[#002540]"
        )}
      >Max</button>
    </div>
  );
}
