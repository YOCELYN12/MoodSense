import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 48, 
  color = "text-blue-500", 
  className = "",
  variant = "default"
}) => {
  const spinnerVariants = {
    default: "animate-spin",
    slow: "animate-spin duration-[3000ms]",
    fast: "animate-spin duration-[500ms]"
  };

  return (
    <div className="flex justify-center items-center">
      <Loader2 
        className={`${color} ${spinnerVariants[variant]} ${className}`} 
        size={size} 
      />
    </div>
  );
};

export default LoadingSpinner;