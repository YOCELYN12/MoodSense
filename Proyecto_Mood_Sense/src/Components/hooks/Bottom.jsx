
import React from 'react';

const useButton = ({ onClick, className, type = 'button', disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default useButton;
