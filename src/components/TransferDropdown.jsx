import React from 'react';
import PropTypes from 'prop-types';

const TransferDropdown = ({ handleContactsClick, handleTransferGuestClick, isMobile }) => {
  return (
    <div className={`dropdownMenu ${isMobile ? 'mobileDropdownMenu' : ''}`}>
      <div className="dropdownItem" onClick={handleContactsClick}>
        Desde contactos
      </div>
      <div className="dropdownItem" onClick={handleTransferGuestClick}>
        Sin registrar
      </div>
      <style jsx>{`
        .dropdownMenu {
          position: ${isMobile ? 'relative' : 'absolute'};
          top: ${isMobile ? '3px' : '3px'};
          left: ${isMobile ? '-8px' : '-8px'};
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
  handleTransferGuestClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default TransferDropdown;