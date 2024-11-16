import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleQuienesSomosClick = () => {
    navigate('/quienes-somos');
    setIsMenuOpen(false); // Cerrar el menú móvil
  };

  const handleObjetivosClick = () => {
    navigate('/objetivos');
    setIsMenuOpen(false); // Cerrar el menú móvil
  };

  const handleAccesoClick = () => {
   // navigate('/login');
    setIsMenuOpen(false); // Cerrar el menú móvil
  };

  const handleRegistroClick = () => {
   // navigate('/registro-de-usuarios');
    setIsMenuOpen(false); // Cerrar el menú móvil
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false); // Cerrar el menú móvil
  };

  const handleServiciosClick = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      const anchor = document.querySelector("[data-scroll-to='cardGridIcon']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        anchor.classList.add('highlight');
        setTimeout(() => {
          anchor.classList.remove('highlight');
        }, 2000); // Eliminar la clase después de 2 segundos
      }
    }, 0);
    setIsMenuOpen(false); // Cerrar el menú móvil
  }, [navigate]);

  const handleContactoClick = useCallback(() => {
    setTimeout(() => {
      const anchor = document.querySelector("[data-scroll-to='footer']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        anchor.classList.add('highlight');
        setTimeout(() => {
          anchor.classList.remove('highlight');
        }, 2000); // Eliminar la clase después de 2 segundos
      }
    }, 0);
    setIsMenuOpen(false); // Cerrar el menú móvil
  }, [navigate]);

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
    <header className="headerContainer">
      <img
        className="logo"
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
        onClick={handleLogoClick}
      />
      <div className="navLinksContainer">
        <h2 className="navLink" onClick={handleQuienesSomosClick}>
          Quienes somos
        </h2>
        <h2 className="navLink" onClick={handleObjetivosClick}>
          Objetivos
        </h2>
        <h2 className="navLink" onClick={handleServiciosClick}>
          Servicios
        </h2>
        <h2 className="navLink" onClick={handleContactoClick}>
          Contacto
        </h2>
      </div>
      <div className="menusContainer">
        <div className="menu">
          <div className="menuItem" />
          <h2 className="navLink" onClick={handleAccesoClick} style={{ textAlign: 'center' }}>
            Acceso
          </h2>
        </div>
        <div className="menu">
          <div className="menuItem" />
          <h2 className="navLink" onClick={handleRegistroClick} style={{ textAlign: 'center' }}>
            Registro
          </h2>
        </div>
      </div>
      <div className="hamburgerButton" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div ref={menuRef} className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        <h2 className="navLink" onClick={handleQuienesSomosClick}>
          Quienes somos
        </h2>
        <h2 className="navLink" onClick={handleObjetivosClick}>
          Objetivos
        </h2>
        <h2 className="navLink" onClick={handleServiciosClick}>
          Servicios
        </h2>
        <h2 className="navLink" onClick={handleContactoClick}>
          Contacto
        </h2>
        <div className="menu">
          <div className="menuItem" />
          <h2 className="navLink" onClick={handleAccesoClick} style={{ textAlign: 'center' }}>
            Acceso
          </h2>
        </div>
        <div className="menu">
          <div className="menuItem" />
          <h2 className="navLink" onClick={handleRegistroClick} style={{ textAlign: 'center' }}>
            Registro
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
        .navLinksContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        @media (max-width: 1300px) {
          .navLinksContainer {
            display: none;
          }
        }
        .navLink {
          margin: 0 20px;
          font-size: 25px;
          line-height: 100%;
          font-weight: 400;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          z-index: 1;
          padding-top: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1300px) {
          .navLink {
            margin: 10px 0;
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
          z-index: 3; /* Asegurar que el menú esté delante del ícono */
        }
        .mobileMenu.open {
          display: flex;
        }
        @keyframes highlight {
          0% {
            background-color: #49beb7;
          }
          100% {
            background-color: var(--sds-color-background-default-default);
          }
        }
        .highlight {
          animation: highlight 2s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default HeaderComponent;