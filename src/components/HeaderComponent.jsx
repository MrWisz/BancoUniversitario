import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  align-self: stretch;
  height: 115px;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0 0 var(--padding-base);
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Logo = styled.img`
  height: 62px;
  width: 252px;
  margin: 0 !important;
  top: 8px;
  left: 10px;
  object-fit: scale-down;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 10px;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenusContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Menu = styled.div`
  width: 132px;
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--background-default-default);
  border-radius: 5px;
  background-color: var(--color-lightseagreen);
  z-index: 1;

  @media (max-width: 768px) {
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

  @media (min-width: 769px) {
    display: none;
  }
`;

const HeaderComponent = () => {
  const navigate = useNavigate();

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
    </HeaderContainer>
  );
};

export default HeaderComponent;