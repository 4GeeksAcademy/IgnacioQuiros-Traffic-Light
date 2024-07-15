import React from "react";

const Light = ({ color, isActive, onClick }) => {
  return (
    <button
      className={`circle ${isActive ? 'active' : ''}`}
      style={{ background: isActive ? color : 'gray' }} 
      onClick={onClick}
    ></button>
  );
};

export default Light;