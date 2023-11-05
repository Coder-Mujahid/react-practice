import React, { useState } from 'react';
import Nav from './Nav';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown w-10/12 mx-auto bg-slate-400">
      <button className="dropdown-button" onClick={toggleDropdown}>
        click me
      </button>
      {isOpen && (
          <Nav></Nav>
      )}
    </div>
  );
}
export default DropdownButton;
