import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import DropdownFooterPanting from './DropdownFooterPainting';

export const DropdownFooter = () => {
  const [shutDropdownn, setShutDropdownn] = useState(false);
  const [toggleShut, setToggleShut] = useState(false);
  const [dropdownn, setDropdownn] = useState(false);
 
  const closeMobileMenu = () => setToggleShut(!toggleShut);

  const onMouseEnter = () => {
    setDropdownn(true);
  };

  const onMouseLeave = () => {
    setDropdownn(false);
    setShutDropdownn(false);
  };

  // dropdown menu control
  const handleSelect = () => setShutDropdownn(!shutDropdownn);
  const closeDropdownMenu = () => {
    setShutDropdownn(false);
  };

  return (
    <>
      <ul onClick={onMouseEnter}>
        <li
          className="nav-item"
          // onMouseEnter={onMouseEnter}
          onClick={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Link to="/" className="nav-links">
            <p>Paintings{''}⏩</p>
           
          </Link>
          {dropdownn && (
            <DropdownFooterPanting
              closeDropdownMenu={closeDropdownMenu}
              closeMobileMenu={closeMobileMenu}
              shutDropdown={shutDropdownn}
              handleSelect={handleSelect}
            />
          )}
        </li>
      </ul>
    </>
  );
};