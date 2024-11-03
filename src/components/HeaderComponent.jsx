import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
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
`;

const Logo = styled.img`
  height: 62px;
  width: 252px;
  margin-left: var(--margin-left);
  margin: 0 20px;
  top: 8px;
  left: 10px;
  object-fit: scale-down;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 1300px) {
    position: static;
    margin-bottom: 10px;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const NavLink = styled.h2`
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

  @media (max-width: 1300px) {
    margin: 10px 0;
  }
`;

const MenusContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Menu = styled.div`
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

  @media (max-width: 1300px) {
    margin-top: 10px;
  }
`;

const MenuItem = styled.div`
  top: 0;
  left: 5px;
  width: 5px;
  height: 32px;
  border-radius: 5px;
  background-color: var(--color-lightseagreen);

  @media (max-width: 1300px) {
    display: inline-block;
  }

  @media (min-width: 1301px) {
    display: none;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  margin: 0 auto;

  @media (max-width: 1300px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: var(--color-lightseagreen);
    margin: 4px 0;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 115px;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleQuienesSomosClick = () => {
    navigate('/quienes-somos');
  };

  const handleObjetivosClick = () => {
    navigate('/objetivos');
  };

  const handleAccesoClick = () => {
    navigate('/login');
  };

  const handleRegistroClick = () => {
    navigate('/registro-de-usuarios');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleServiciosClick = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      const anchor = document.querySelector("[data-scroll-to='cardGridIcon']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, 0);
  }, [navigate]);

  const handleContactoClick = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      const anchor = document.querySelector("[data-scroll-to='component1Container']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, 0);
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1300) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
        onClick={handleLogoClick}
      />
      <NavLinksContainer>
        <NavLink onClick={handleQuienesSomosClick}>
          Quienes somos
        </NavLink>
        <NavLink onClick={handleObjetivosClick}>
          Objetivos
        </NavLink>
        <NavLink onClick={handleServiciosClick}>
          Servicios
        </NavLink>
        <NavLink onClick={handleContactoClick}>
          Contacto
        </NavLink>
      </NavLinksContainer>
      <MenusContainer>
        <Menu>
          <MenuItem />
          <NavLink onClick={handleAccesoClick} style={{ textAlign: 'center' }}>
            Acceso
          </NavLink>
        </Menu>
        <Menu>
          <MenuItem />
          <NavLink onClick={handleRegistroClick} style={{ textAlign: 'center' }}>
            Registro
          </NavLink>
        </Menu>
      </MenusContainer>
      <HamburgerButton onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <MobileMenu isOpen={isMenuOpen}>
        <NavLink onClick={handleQuienesSomosClick}>
          Quienes somos
        </NavLink>
        <NavLink onClick={handleObjetivosClick}>
          Objetivos
        </NavLink>
        <NavLink onClick={handleServiciosClick}>
          Servicios
        </NavLink>
        <NavLink onClick={handleContactoClick}>
          Contacto
        </NavLink>
        <Menu>
          <MenuItem />
          <NavLink onClick={handleAccesoClick} style={{ textAlign: 'center' }}>
            Acceso
          </NavLink>
        </Menu>
        <Menu>
          <MenuItem />
          <NavLink onClick={handleRegistroClick} style={{ textAlign: 'center' }}>
            Registro
          </NavLink>
        </Menu>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default HeaderComponent;