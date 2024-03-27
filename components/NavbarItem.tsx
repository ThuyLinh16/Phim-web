import React, { useState } from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!active) {
      setShowMenu(true);
      event.currentTarget.style.transform = 'translateX(5px)'; // Di chuyển chữ sang phải 5px
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(false);
    event.currentTarget.style.transform = 'translateX(0)'; // Reset vị trí chữ về ban đầu
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className={`text-white ${active ? 'cursor-default' : 'cursor-pointer transition'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleMenu}
    >
      {label}
      {label === 'Short Films' && showMenu && (
        <div className="absolute bg-transparent w-36 top-full left-0 py-2 px-4 shadow-lg rounded-md backdrop-filter backdrop-blur-md">
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 1-100</div>
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 101-200</div>
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 201-300</div>
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 301-400</div>
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 401-500</div>
          <div className="text-white hover:text-blue-500 cursor-pointer transition">Tập 501-600</div>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
