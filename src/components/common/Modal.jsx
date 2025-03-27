import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={onClose} 
    >
      <div 
        className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl 
        w-[95%] sm:w-[90%] md:w-full max-w-7xl 
        h-[60vh] sm:h-[75vh] md:h-[90vh] 
        relative flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl md:text-3xl"
        >
          ✖
        </button>
        <div className="w-[95%] h-[85%] flex justify-center items-center"> 
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
