import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  align-items: center; /* Centrar verticalmente */
  justify-content: flex-start;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 62px;
  width: 252px;
  position: absolute;
  margin: 0 !important;
  top: 8px;
  left: 10px;
  object-fit: scale-down;
  z-index: 1;
   cursor: pointer;
`;

const NavLink = styled.h2`
  margin: 0 !important;
  font-size: 25px;
  line-height: 100%;
  font-weight: 400;
  font-family: inherit;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  padding-top: 5px;
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
`;

const Menu = styled.div`
  width: 132px;
  margin: 0 !important;
  position: absolute;
  bottom: 47px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  color: var(--background-default-default);
  border-radius: 5px;
  background-color: var(--color-lightseagreen);
  z-index: 1;
`;

const MenuItem = styled.div`
  top: 0;
  left: 5px;
  width: 5px; /* Ajustar el ancho para no ocupar todo el espacio */
  height: 32px;
  border-radius: 5px;
  background-color: var(--color-lightseagreen);
`;

const HeaderComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleQuienesSomosClick = () => {
    navigate('/quienes-somos'); // Navigate to QuienesSomos page
  };

  const handleObjetivosClick = () => {
    navigate('/objetivos'); // Navigate to QuienesSomos page
  };

  const handleAccesoClick = () => {
    navigate('/login'); // Navigate to QuienesSomos page
  };

  const handleRegistroClick = () => {
    navigate('/registro-de-usuarios'); // Navigate to QuienesSomos page
  };

  const handleLogoClick = () => {
    navigate('/'); // Navigate to QuienesSomos page
  };

  const handleServiciosClick = useCallback(() => {
    navigate('/'); // Navigate to home page
    setTimeout(() => {
      const anchor = document.querySelector("[data-scroll-to='cardGridIcon']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, 0);
  }, [navigate]);

  const handleContactoClick = useCallback(() => {
    navigate('/'); // Navigate to home page
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
      <NavLink style={{ right: '878px', position: 'absolute' }} onClick={handleQuienesSomosClick}>
        Quienes somos
      </NavLink>
      <NavLink style={{ right: '704px', position: 'absolute' }} onClick={handleObjetivosClick}>
        Objetivos
      </NavLink>
      <NavLink style={{ right: '530px', width: '129px', position: 'absolute' }} onClick={handleServiciosClick}>
        Servicios
      </NavLink>
      <NavLink style={{ right: '355px', width: '130px', position: 'absolute' }} onClick={handleContactoClick}>
        Contacto
      </NavLink>
      <Menu style={{ right: '206px', position: 'absolute', width: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MenuItem />
        <NavLink onClick={handleAccesoClick} style={{ textAlign: 'center' }}>
          Acceso
        </NavLink>
      </Menu>
      <Menu style={{ right: '31px', position: 'absolute', width: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MenuItem />
        <NavLink onClick={handleRegistroClick} style={{ textAlign: 'center' }}>
          Registro
        </NavLink>
      </Menu>
    </HeaderContainer>
  );
};

export default HeaderComponent;