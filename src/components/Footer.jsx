import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 202px;
  padding: var(--sds-size-space-800) var(--sds-size-space-800) var(--sds-size-space-4000) var(--sds-size-space-800);
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px var(--sds-size-space-400);
  flex-wrap: wrap;
  position: relative; /* Cambiado a relative para ubicarse al final del contenido */
  border-top: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
  background: var(--sds-color-background-default-default);
`;


const LogoContainer = styled.div`
  display: flex;
  width: 262px;
  min-width: 240px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sds-size-space-600);
  flex-shrink: 0;
  font-family: "Montserrat Alternates";
`;

const LogoX = styled.img`
  width: 23.98px;
  height: var(--Icon-Small, 24px);
`;

const LogoInsta = styled.img`
  width: var(--Icon-Small, 24px);
  height: var(--Icon-Small, 24px);
`;

const LogoYT = styled.img`
  width: var(--Icon-Small, 24px);
  height: var(--Icon-Small, 24px);
`;

const LogoLinke = styled.img`
  width: var(--Icon-Small, 24px);
  height: var(--Icon-Small, 24px);
  display: flex;
  align-items: center;
  gap: var(--sds-size-space-400);
`;

const Direccion = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  font-family: inherit;
  color: #085f63;
`;

const DireccionTexto = styled.p`
  width: 187px;
  height: 101px;
  flex-shrink: 0;
  color: #49beb7;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Contacto = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  color: #085f63;
  font-family: inherit;
`;

const ContactoTexto = styled.p`
  display: flex;
  width: 89px;
  height: 22px;
  justify-content: flex-end;
  align-items: center;
  font-family: inherit;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoX loading="lazy" alt="Logo X" src="/x-logo.svg" />
        <LogoInsta loading="lazy" alt="Instagram Logo" src="/logo-instagram.svg" />
        <LogoYT loading="lazy" alt="YouTube Logo" src="/logo-youtube.svg" />
        <LogoLinke loading="lazy" alt="LinkedIn Logo" src="/linkedin.svg" />
        <Direccion>
          Dirección
          <DireccionTexto>
            Dirección: Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela
          </DireccionTexto>
        </Direccion>
        <Contacto>
          Contacto
          <ContactoTexto>
            Teléfono: +58 212-555-5555
            <br />
            Fax: +58 212-555-5556
            <br />
            info@bancouniversitario.com.ve
          </ContactoTexto>
        </Contacto>
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;