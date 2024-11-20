import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';


const HeaderBanca = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isTransferMenuOpen, setIsTransferMenuOpen] = useState(false);
  const handleLogoClick = () => {
    navigate('/'); //Cambiar al landing page//*
    setIsMenuOpen(false);
  };
  const handleHomeClick = () => {
    navigate('/home-user');//Cambiar al home user//*
    setIsMenuOpen(false);
  };
  const handleRegisterClick = () => {
    navigate('/register');//Cambiar al register//*
    setIsMenuOpen(false);
  };
  const handleTransferClick = () => setIsTransferMenuOpen((prev) => !prev);
  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1300) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`headerContainer ${className}`}>
      <img
        className="logo"
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
        onClick={handleLogoClick}
      />
      <div className="menusContainer">
      <div className="menu" onClick={handleTransferClick}>
          <img src="/Clipboard.png" alt="Transfer Icon" className="menuIcon" />
          <h2 className="navLink">Transferencias</h2>
        </div>
        {isTransferMenuOpen && (
          <div className="dropdownMenu">
            <div className="dropdownItem" onClick={() => navigate('/transfer-contacts')}>
              Desde contactos
            </div>
            <div className="dropdownItem" onClick={() => navigate('/transfer-guest')}>
              Sin registrar
            </div>
          </div>
        )}
        <div className="menu">
          <div className="menuItem"  />
          <img src="/lista.png" alt="Form Icon" className="menuIcon"  />
          <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }} onClick={handleRegisterClick}>
            Registro
          </h2>
        </div>
        <div className="menu">
          <div className="menuItem" />
          <img src="/hogar.png" alt="Home Icon" className="menuIcon"  />
          <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }} onClick={handleHomeClick}>
            Inicio
          </h2>
        </div>
      </div>
      <div className="hamburgerButton" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      
      </div>
      <div ref={menuRef} className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu">
          <div className="menuItem" />
          <img src="/lista.png" alt="Form Icon" className="menuIcon" />
          <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
            Registro
          </h2>
        </div>
        <div className="menu">
          <div className="menuItem" />
          <img src="/hogar.png" alt="Home Icon" className="menuIcon" />
          <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
            Inicio
          </h2>
        </div>
      </div>
      <style jsx>{`
        .headerContainer {
          align-self: stretch;
          height: 115px;
          flex-shrink: 0;
          flex-direction: row;
          padding: var(--py) var(--px);
          box-sizing: border-box;
          position: relative;
          max-width: 100%;
          text-align: center;
          font-size: var(--font-size-9xl);
          color: var(--color-lightseagreen);
          font-family: var(--font-montserrat-alternates);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid var(--color-lightseagreen);
        }
        .logo {
          height: 62px;
          width: 252px;
          margin-left: var(--margin-left);
          margin: 0 20px;
          top: 8px;
          left: 10px;
          object-fit: scale-down;
          z-index: 1;
          cursor: pointer;
        }
        @media (max-width: 1300px) {
          .logo {
            position: static;
            margin-bottom: 10px;
          }
        }
        @media (max-width: 324px) {
          .logo {
            height: 50px;
            width: 200px;
          }
        }
        @media (max-width: 290px) {
          .logo {
            height: 40px;
            width: 160px;
          }
        }
        .menusContainer {
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 1300px) {
          .menusContainer {
            display: none;
          }
        }
        .menu {
          width: 132px;
          margin: 0 4px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: var(--background-default-default);
          border-radius: 5px;
          background-color: var(--color-lightseagreen);
          z-index: 1;
          padding: 0 10px; /* Add padding to ensure text stays within bounds */
          &:hover {
          color:#085f63;
          border:solid 2px;
          }
        }
        @media (max-width: 1300px) {
          .menu {
            margin-top: 10px;
          }
        }
        .menuItem {
          top: 0;
          left: 5px;
          width: 5px;
          height: 32px;
          border-radius: 5px;
          background-color: var(--color-lightseagreen);
        }
        @media (max-width: 1300px) {
          .menuItem {
            display: inline-block;
          }
        }
        @media (min-width: 1301px) {
          .menuItem {
            display: none;
          }
        }
        .menuIcon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          
        }
      
        .navLink {
          white-space: nowrap; /* Ensure text does not wrap */
          overflow: hidden; /* Hide overflow text */
          text-overflow: ellipsis; /* Add ellipsis for overflow text */
        }
        .hamburgerButton {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 2;
          margin: 0 auto;
        }
        @media (max-width: 1300px) {
          .hamburgerButton {
            display: flex;
          }
        }
        @media (max-width: 324px) {
          .hamburgerButton {
            margin-left: 10px;
          }
        }
        @media (max-width: 290px) {
          .hamburgerButton {
            margin-left: 5px;
          }
        }
        .hamburgerButton div {
          width: 25px;
          height: 3px;
          background-color: var(--color-lightseagreen);
          margin: 4px 0;
        }
        @media (max-width: 324px) {
          .hamburgerButton div {
            width: 20px;
            height: 2px;
          }
        }
        @media (max-width: 290px) {
          .hamburgerButton div {
            width: 15px;
            height: 2px;
          }
        }
        .mobileMenu {
          display: none;
          flex-direction: column;
          align-items: center;
          background-color: white;
          position: absolute;
          top: 115px;
          width: 100%;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 3;
        }
        .mobileMenu.open {
          display: flex;
        }
      `}</style>
    </header>
  );
};

HeaderBanca.propTypes = {
  className: PropTypes.string,
};

export default HeaderBanca;