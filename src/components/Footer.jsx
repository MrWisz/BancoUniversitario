import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto; /* Ajustar altura automáticamente */
  padding: var(--sds-size-space-800);
  align-items: center;
  justify-content: center; /* Centrar contenido verticalmente */
  border-top: 2px solid var(--color-lightseagreen);
  border-bottom: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
  background: var(--sds-color-background-default-default);
  box-sizing: border-box; /* Incluir padding y border en la altura total */
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sds-size-space-600);
  font-family: "Montserrat Alternates";
`;

const Texto = styled.p`
  font-size: 20px; /* Tamaño de fuente del heading */
  font-weight: bold; /* Peso de fuente del heading */
  color: #085f63; /* Color del heading */
  text-shadow: unset; /* Sombra de texto del heading */
  line-height: 140%;
  text-align: center;
  margin: 0; /* Eliminar márgenes para evitar desbordamiento */

  @media (max-width: 500px) {
    font-size: 18px; /* Tamaño de fuente reducido */
  }

  @media (max-width: 400px) {
    font-size: 16px; /* Tamaño de fuente reducido */
  }

  @media (max-width: 300px) {
    font-size: 14px; /* Tamaño de fuente reducido */
  }
`;

const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--sds-size-space-600);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #085f63;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;

const Footer = () => {
  return (
    <FooterContainer data-scroll-to="footer">
      <LogoContainer>
        <Texto>
          Dirección: Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela
        </Texto>
        <Contacto>
          <Texto>
            Teléfono: +58 212-555-5555
            <br />
            Fax: +58 212-555-5556
            <br />
            info@bancouniversitario.com.ve
          </Texto>
        </Contacto>
        <SocialIcons>
          <IconLink href="https://twitter.com/bancouniversitario" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </IconLink>
          <IconLink href="https://instagram.com/bancouniversitario" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://facebook.com/bancouniversitario" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </IconLink>
          <IconLink href="https://linkedin.com/company/bancouniversitario" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </IconLink>
          <IconLink href="https://youtube.com/bancouniversitario" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconLink>
        </SocialIcons>
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;