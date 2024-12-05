import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TransferDropdown = ({ handleContactsClick, isMobile }) => {
  const navigate = useNavigate();

  return (
    <div className={`dropdownMenu ${isMobile ? 'mobileDropdownMenu' : ''}`}>
      {console.log("Rendering dropdownMenu")}
      <div className="dropdownItem" onClick={() => { console.log("Dropdown item clicked"); handleContactsClick(); }}>
        Desde contactos
      </div>
      <div className="dropdownItem" onClick={() => navigate('/transfer-guest')}>
        Sin registrar
      </div>
      <style jsx>{`
        .dropdownMenu {
          position: ${isMobile ? 'relative' : 'absolute'};
          top: ${isMobile ? '3px' : '0'};
          left: ${isMobile ? '-8px' : '0'};
          background-color: var(--color-lightseagreen);
          border: 1px solid var(--color-lightseagreen);
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
          width: 205px; /* Match the width of the menu */
        }
        .dropdownItem {
          padding: 10px;
          color: var(--background-default-default);
          cursor: pointer;
          text-align: center;
          font-size: 20px; /* Set font size for dropdown items */
          &:hover {
            background-color: #085f63;
            color: white;
          }
        }
        .dropdownItem:not(:last-child) {
          border-bottom: 1px solid #085f63; /* Separation line color */
        }
      `}</style>
    </div>
  );
};

TransferDropdown.propTypes = {
  handleContactsClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default TransferDropdown;