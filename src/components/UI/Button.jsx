import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({
  text = "Get In Touch",   // Default button text
  onClick = () => {},     // Click handler
  icon = <ArrowUpRight size={18} />, // Default icon, but you can override it
  className = "",         // Extra styles if needed
}) => {
  return (
    // <button
    //   onClick={onClick}
    //   className={`flex items-center gap-2 px-6 py-3 rounded-full 
    //     bg-gradient-to-r from-[#83BF2D] to-[#00A3AF] 
    //     text-white font-medium shadow-md 
    //     hover:opacity-90 transition duration-300 ${className}`}
    // >
    //   {text}
    //   {icon}
    // </button>
     <button
            className="flex px-6 py-3 rounded-full items-center transition-all duration-300 gap-2"
            style={{
              background: "var(--background-color-gradient)",
              color: "var(--background-color)",
            }}
          >
            {/* Get In Touch */}
            {text}
            {/* <ArrowUpRight className="ml-2 w-4 h-4" /> */}
            {icon}
          </button>
  );
};

export default Button;
