import React, { useState } from 'react';
import Menu from './Menu';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      {menuVisible && <Menu />}
      <div className='navbar'>
        <div className='title'>
          Destination <strong>You</strong>
        </div>

        <div className='nav-menu' onClick={handleMenu}>
          <div className='navline-1'></div>
          <div className='navline-2'></div>
          <div className='navline-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

