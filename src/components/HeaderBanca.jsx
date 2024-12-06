import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { useNavigate, useLocation } from 'react-router-dom';
import { removeJWT } from '../utils/localStorage';
import TransferDropdown from './TransferDropdown';

const HeaderBanca = ({ className = "", onPasswordChangeClick, onSaldoClick, onContactsClick, onTransferGuestClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransferMenuOpen, setIsTransferMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const transferButtonRef = useRef(null);

  const handleLogoClick = () => {
    onSaldoClick();
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/home-user');
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    navigate('/register');
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleTransferClick = () => {
    setIsTransferMenuOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    removeJWT();
    navigate('/');
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
  const isLoggedIn = !!localStorage.getItem('bank_jwt');

  const handleContactsClick = () => {
    onContactsClick();
    setIsMenuOpen(false);
    setIsTransferMenuOpen(false);
  };

  const handleTransferGuestClick = () => {
    onTransferGuestClick();
    setIsMenuOpen(false);
    setIsTransferMenuOpen(false);
  };

  const handleMobilePasswordChangeClick = () => {
    onPasswordChangeClick();
    setIsMenuOpen(false);
  };

  const handleMobileSaldoClick = () => {
    onSaldoClick();
    setIsMenuOpen(false);
  };

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
            <div className="menu" onClick={handleTransferClick} ref={transferButtonRef}>
              <img src="/Clipboard.png" alt="Transfer Icon" className="menuIcon" />
              <h2 className="navLink transferNavLink">Transferencias</h2>
            </div>
            {isTransferMenuOpen && transferButtonRef.current && (
              <div
                className="dropdownContainer"
                ref={dropdownRef}
              >
                <TransferDropdown 
                  handleContactsClick={handleContactsClick} 
                  handleTransferGuestClick={handleTransferGuestClick} 
                  isMobile={false} 
                />
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" onClick={onSaldoClick}>
                <div className="menuItem" />
                <img src="/dolar.png" alt="Saldo Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Saldo
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" onClick={onPasswordChangeClick}>
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
            <div className="menu" onClick={handleContactsClick}>
              <h2 className="navLink" style={{ textAlign: 'center', fontSize: '14px' }}>Transf. desde contactos</h2>
            </div>
            <div className="menu" onClick={handleTransferGuestClick}>
              <h2 className="navLink" style={{ textAlign: 'center', fontSize: '14px' }}>Transf. sin registrar</h2>
            </div>
            {isLoggedIn && (
              <div className="menu" onClick={handleMobileSaldoClick}>
                <div className="menuItem" />
                <img src="/dolar.png" alt="Saldo Icon" className="menuIcon" />
                <h2 className="navLink" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Saldo
                </h2>
              </div>
            )}
            {isLoggedIn && (
              <div className="menu" onClick={handleMobilePasswordChangeClick}>
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
          width: 205px;
          height: 50px;
          margin: 0 4px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: var(--background-default-default);
          border-radius: 5px;
          background-color: var(--color-lightseagreen);
          z-index: 1;
          padding: 0 10px;
          box-sizing: border-box;
          cursor: pointer;
          margin-right: 20px;
          &:hover {
            color: #085f63;
            box-shadow: inset 0 0 0 2px #085f63;
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
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .transferNavLink {
          font-size: 20px;
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
        .dropdownContainer {
          position: absolute;
          top: 100%;
          left: 12px;
          width: 100%;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        .dropdownItem {
          padding: 10px;
          color: var(--background-default-default);
          cursor: pointer;
          text-align: center;
          font-size: 20px;
          &:hover {
            background-color: #085f63;
            color: white;
          }
        }
        .dropdownItem:not(:last-child) {
          border-bottom: 1px solid #085f63;
        }
      `}</style>
    </header>
  );
};

HeaderBanca.propTypes = {
  className: PropTypes.string,
  onPasswordChangeClick: PropTypes.func.isRequired,
  onSaldoClick: PropTypes.func.isRequired,
  onContactsClick: PropTypes.func.isRequired,
  onTransferGuestClick: PropTypes.func.isRequired,
};

export default HeaderBanca;