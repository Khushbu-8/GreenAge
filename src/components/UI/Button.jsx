import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({
  text = "Get In Touch",   // Default button text
  onClick = () => {},     // Click handler
  icon = <ArrowUpRight size={18} />, // Default icon, but you can override it
  className = "",         // Extra styles if needed
}) => {
  return (
     <button
            className="flex px-6 py-3 rounded-full items-center transition-all duration-300 gap-2 bg-gradients text-white"
          >
            {/* Get In Touch */}
            {text}
            {/* <ArrowUpRight className="ml-2 w-4 h-4" /> */}
            {icon}
          </button>
  );
};

export default Button;
