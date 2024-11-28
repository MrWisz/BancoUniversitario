import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { useNavigate, useLocation } from 'react-router-dom';
import { removeJWT } from '../utils/localStorage'; // Importa la función removeJWT

const HeaderBanca = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
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

  const handleLoginClick = () => {
    navigate('/login');//Cambiar al login//*
    setIsMenuOpen(false);
  };

  const handleTransferClick = () => setIsTransferMenuOpen((prev) => !prev);

  const handleLogoutClick = () => {
    removeJWT(); // Eliminar el token de autenticación
    navigate('/'); // Navegar a la página de inicio
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsTransferMenuOpen(false);
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

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isLoggedIn = !!localStorage.getItem('bank_jwt'); // Verificar si el usuario está autenticado

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
        {!isLoginPage && !isRegisterPage && (
          <>
            <div className="menu" onClick={handleTransferClick}>
              <img src="/Clipboard.png" alt="Transfer Icon" className="menuIcon" />
              <h2 className="navLink transferNavLink">Transferencias</h2>
            </div>
            {isTransferMenuOpen && (
              <div className="dropdownMenu" ref={dropdownRef}>
                <div className="dropdownItem" onClick={() => navigate('/transfer-contacts')}>
                  Desde contactos
                </div>
                <div className="dropdownItem" onClick={() => navigate('/transfer-guest')}>
                  Sin registrar
                </div>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu">
                <div className="menuItem" />
                <img src="/dolar.png" alt="Saldo Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Saldo
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" >
                <div className="menuItem" />
                <img src="/password.png" alt="Password Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '16px' }}>
                  Cambiar contraseña
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" onClick={handleLogoutClick}>
                <div className="menuItem" />
                <img src="/logout.png" alt="Logout Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Salir
                </h2>
              </div>
            )}
          </>
        )}
        {isRegisterPage && (
          <div className="menu" onClick={handleLoginClick}>
            <div className="menuItem" />
            <img src="/llave.png" alt="Home Icon" className="menuIcon" />
            <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
              Ingresar
            </h2>
          </div>
        )}
        {isLoginPage && (
          <div className="menu" onClick={handleRegisterClick}>
            <div className="menuItem" />
            <img src="/lista.png" alt="Form Icon" className="menuIcon" />
            <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
              Registro
            </h2>
          </div>
        )}
      </div>
      <div className="hamburgerButton" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div ref={menuRef} className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        {!isLoginPage && !isRegisterPage && (
          <>
            <div className="menu" onClick={handleTransferClick}>
              <img src="/Clipboard.png" alt="Transfer Icon" className="menuIcon" />
              <h2 className="navLink transferNavLink">Transferencias</h2>
            </div>
            {isTransferMenuOpen && (
              <div className="dropdownMenu mobileDropdownMenu" ref={dropdownRef}>
                <div className="dropdownItem" onClick={() => navigate('/transfer-contacts')}>
                  Desde contactos
                </div>
                <div className="dropdownItem" onClick={() => navigate('/transfer-guest')}>
                  Sin registrar
                </div>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu">
                <div className="menuItem" />
                <img src="/dolar.png" alt="Saldo Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Saldo
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" >
                <div className="menuItem" />
                <img src="/password.png" alt="Password Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '16px' }}>
                  Cambiar contraseña
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" onClick={handleLogoutClick}>
                <div className="menuItem" />
                <img src="/logout.png" alt="Logout Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Salir
                </h2>
              </div>
            )}
          </>
        )}
        {isRegisterPage && (
          <div className="menu" onClick={handleLoginClick}>
            <div className="menuItem" />
            <img src="/llave.png" alt="Home Icon" className="menuIcon" />
            <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
              Ingresar
            </h2>
          </div>
        )}
        {isLoginPage && (
          <div className="menu" onClick={handleRegisterClick}>
            <div className="menuItem" />
            <img src="/lista.png" alt="Form Icon" className="menuIcon" />
            <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
              Registro
            </h2>
          </div>
        )}
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
          position: relative;
        }
        @media (max-width: 1300px) {
          .menusContainer {
            display: none;
          }
        }
        .menu {
          width: 205px; /* Match the width of the dropdown */
          height: 50px; /* Set a fixed height */
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
          box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
          cursor: pointer; /* Ensure the cursor changes to pointer */
          margin-right: 20px; /* Add right margin */
          &:hover {
            color: #085f63;
            box-shadow: inset 0 0 0 2px #085f63; /* Internal border */
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
        .transferNavLink {
          font-size: 20px; /* Set font size for Transferencias menu */
        }
        .dropdownMenu {
          position: absolute;
          top: calc(100% + 2px); /* 2px separation from the button */
          left: 5px;
          background-color: var(--color-lightseagreen);
          border: 1px solid var(--color-lightseagreen);
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
          width: 200px; /* Match the width of the menu */
        }
        .mobileDropdownMenu {
          position: relative;
          top: 3px; /* Align with the button */
          left: -8px; /* Align with the button */
        }
        .dropdownItem {
          padding: 10px;
          color: var(--background-default-default);
          cursor: pointer;
          text-align: center;
          top: 3px;
          font-size: 20px; /* Set font size for dropdown items */
          &:hover {
            background-color: #085f63;
            color: white;
          }
        }
        .dropdownItem:not(:last-child) {
          border-bottom: 1px solid #085f63; /* Separation line color */
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