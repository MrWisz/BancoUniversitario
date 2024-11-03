<<<<<<< HEAD
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

=======
import TextStrong from "./TextStrong";
import TextLinkList from "./TextLinkList";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  text,
  propFlex,
  propAlignSelf,
  hasTitle,
}) => {
  return (
    <footer
      className={`footer ${className}`}
      style={{
        width: "100%",
        margin: "0 !important",
        position: "absolute",
        height: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        backgroundColor: "var(--background-default-default)",
        borderTop: "1px solid var(--border-default-default)",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "var(--padding-11xl) var(--space-800) var(--padding-79xl)",
        gap: "var(--space-400)",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--text-default-default)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <div
        className="title"
        style={{
          width: "262px",
          flexDirection: "row",
          gap: "var(--space-600)",
          minWidth: "240px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="figma"
          style={{
            height: "px",
            width: "px",
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="icon"
            alt=""
            src="/icon.svg"
            style={{
              height: "35px",
              width: "23.3px",
              position: "relative",
              display: "none",
            }}
          />
        </div>
        <div
          className="buttonList"
          style={{
            flexDirection: "row",
            gap: "var(--space-400)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <img
            className="xLogoIcon"
            loading="lazy"
            alt=""
            src="/x-logo.svg"
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              minHeight: "24px",
            }}
          />
          <img
            className="logoInstagramIcon"
            loading="lazy"
            alt=""
            src="/logo-instagram.svg"
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              minHeight: "24px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          />
          <img
            className="logoInstagramIcon"
            loading="lazy"
            alt=""
            src="/logo-youtube.svg"
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              minHeight: "24px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          />
          <img
            className="logoInstagramIcon"
            loading="lazy"
            alt=""
            src="/linkedin.svg"
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              minHeight: "24px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          />
        </div>
      </div>
      <div
        className="textLinkList"
        style={{
          width: "262px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "var(--space-300)",
        }}
      >
        <div
          className="title1"
          style={{
            alignSelf: "stretch",
            flexDirection: "column",
            padding: "0 0 var(--space-400)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <TextStrong
            text={text}
            propFlex={propFlex}
            propAlignSelf={propAlignSelf}
          />
        </div>
        {["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"].map((item, index) => (
          <div
            key={index}
            className="textLinkListItem"
            style={{
              width: "89px",
              height: "22px",
              position: "relative",
              display: "none",
            }}
          >
            <div
              className="listItem"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                lineHeight: "140%",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
      <TextLinkList hasTitle={hasTitle} text="Contacto" />
      <div
        className="textLinkList1"
        style={{
          height: "276px",
          width: "262px",
          display: "none",
          flexDirection: "column",
          gap: "var(--space-300)",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="title2"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0 0 var(--space-400)",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="textStrong"
            style={{
              display: "none",
              flexDirection: "row",
              alignSelf: "stretch",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              className="textStrong1"
              style={{
                position: "relative",
                lineHeight: "140%",
                fontWeight: 600,
              }}
            >
              Resources
            </div>
          </div>
        </div>
        {["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"].map((item, index) => (
          <div
            key={index}
            className="textLinkListItem7"
            style={{
              width: "89px",
              height: "22px",
              position: "relative",
            }}
          >
              <div
                className={`listItem ${item === "Color wheel" || item === "Developers" ? "listItem10" : ""}`}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  lineHeight: "140%",
                  display: item === "Color wheel" || item === "Developers" ? "inline-block" : "block",
                  width: item === "Color wheel" || item === "Developers" ? "100%" : "auto",
                  height: item === "Color wheel" || item === "Developers" ? "100%" : "auto",
                }}
              >
                {item}
              </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
  hasTitle: PropTypes.bool,
};

>>>>>>> origin/main
export default Footer;