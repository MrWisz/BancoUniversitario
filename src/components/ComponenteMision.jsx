import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent"; 
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ComponenteMision = ({
  className = "",
  logoNoBackground1,
  label,
  hasIconStart,
  hasIconEnd,
  showButton,
  propHeight2,
  propBackgroundColor,
  propBorder,
  propPadding,
  propFlex,
  propAlignSelf,
  propMinHeight,
  propAlignSelf1,
  propFontSize,
  propColor,
  propFlex1,
  propTextShadow,
  propFontWeight,
  propWidth,
  propMinHeight1,
  block,
}) => {
  const navigate = useNavigate();

  const onQuienesSomosTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onObjetivosTextClick = useCallback(() => {
    navigate("/objetivos");
  }, [navigate]);

  const onServiciosTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactoTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='component1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccesoTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegistroTextClick = useCallback(() => {
    navigate("/registro-de-usuarios");
  }, [navigate]);

  return (
    <header
      className={`headerParent ${className}`}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "var(--font-size-9xl)",
        color: "var(--color-lightseagreen)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <HeaderComponent
        onQuienesSomosTextClick={onQuienesSomosTextClick}
        onObjetivosTextClick={onObjetivosTextClick}
        onServiciosTextClick={onServiciosTextClick}
        onContactoTextClick={onContactoTextClick}
        onAccesoTextClick={onAccesoTextClick}
        onRegistroTextClick={onRegistroTextClick}
      />
      <img
        className="logoNoBackground1Icon"
        alt=""
        src={logoNoBackground1}
        style={{
          height: "calc(100% - 17px)",
          width: "562px",
          position: "absolute",
          margin: "0 !important",
          top: "8px",
          bottom: "9px",
          left: "10px",
          maxHeight: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <div
        className="quienesSomos"
        onClick={onQuienesSomosTextClick}
        style={{
          width: "219px",
          right: "878px",
          display: "inline-block",
          mixBlendMode: "normal",
          position: "absolute",
          margin: "0 !important",
          bottom: "31px",
          lineHeight: "100%",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Quienes somos
      </div>
      <div
        className="objetivos"
        onClick={onObjetivosTextClick}
        style={{
          right: "704px",
          position: "absolute",
          margin: "0 !important",
          bottom: "31px",
          lineHeight: "100%",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Objetivos
      </div>
      <div
        className="servicios"
        onClick={onServiciosTextClick}
        style={{
          width: "129px",
          right: "530px",
          minWidth: "129px",
          height: "32px",
          display: "inline-block",
          position: "absolute",
          margin: "0 !important",
          bottom: "31px",
          lineHeight: "100%",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Servicios
      </div>
      <div
        className="contacto"
        onClick={onContactoTextClick}
        style={{
          width: "130px",
          right: "355px",
          height: "32px",
          display: "inline-block",
          position: "absolute",
          margin: "0 !important",
          bottom: "31px",
          lineHeight: "100%",
          whiteSpace: "nowrap",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Contacto
      </div>
      <div
        className="navigation"
        style={{
          width: "103px",
          margin: "0 !important",
          right: "206px",
          bottom: "31px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: "var(--background-default-default)",
          position: "absolute",
          backgroundColor: "var(--color-lightseagreen)",
          zIndex: 1,
        }}
      >
        <div
          className="navigationChild"
          style={{
            width: "103px",
            height: "32px",
            position: "relative",
            backgroundColor: "var(--color-lightseagreen)",
            display: "none",
          }}
        />
        <div
          className="acceso"
          onClick={onAccesoTextClick}
          style={{
            flex: 1,
            lineHeight: "100%",
            display: "inline-block",
            minWidth: "103px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            zIndex: 2,
            height: "32px",
            position: "relative",
          }}
        >
          Acceso
        </div>
      </div>
      <div
        className="navigation1"
        style={{
          width: "130px",
          margin: "0 !important",
          right: "31px",
          bottom: "31px",
          height: "32px",
          position: "absolute",
          color: "var(--background-default-default)",
          zIndex: 1,
        }}
      >
        <div
          className="navigationItem"
          style={{
            top: "0",
            left: "5px",
            width: "120px",
            height: "32px",
            position: "absolute",
            backgroundColor: "var(--color-lightseagreen)",
            zIndex: 1,
          }}
        />
        <div
          className="registro"
          onClick={onRegistroTextClick}
          style={{
            top: "0",
            left: "0",
            lineHeight: "100%",
            display: "inline-block",
            height: "28px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            zIndex: 2,
            position: "absolute",
          }}
        >
          Registro
        </div>
      </div>
    </header>
  );
};

ComponenteMision.propTypes = {
  className: PropTypes.string,
  logoNoBackground1: PropTypes.string,
  label: PropTypes.string,
  hasIconStart: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  showButton: PropTypes.bool,
  propHeight2: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBorder: PropTypes.string,
  propPadding: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propMinHeight: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propFontSize: PropTypes.string,
  propColor: PropTypes.string,
  propFlex1: PropTypes.string,
  propTextShadow: PropTypes.string,
  propFontWeight: PropTypes.string,
  propWidth: PropTypes.string,
  propMinHeight1: PropTypes.string,
  block: PropTypes.bool,
};

export default ComponenteMision;