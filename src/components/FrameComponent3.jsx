import HeaderComponent from "../components/HeaderComponent"; 
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header
      className={`headerParent ${className}`}
      style={{
        alignSelf: "stretch",
        height: "100px",
        padding: "0 var(--padding-12xs) var(--padding-12xs) 0",
        position: "relative",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "var(--font-size-17xl)",
        color: "var(--background-default-default)",
        fontFamily: "var(--font-montserrat-alternates)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <HeaderComponent
        onQuienesSomosTextClick={() => {}}
        onObjetivosTextClick={() => {}}
        onServiciosTextClick={() => {}}
        onContactoTextClick={() => {}}
        onAccesoTextClick={() => {}}
        onRegistroTextClick={() => {}}
      />
      <div
        className="navigation"
        style={{
          width: "285px",
          top: "14px",
          right: "98px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "var(--padding-5xs) var(--padding-xs) var(--padding-2xs) var(--padding-sm)",
          boxSizing: "border-box",
          gap: "var(--gap-12xs)",
          position: "relative",
          margin: "0 !important",
        }}
      >
        <div
          className="iconButton"
          style={{
            height: "100%",
            width: "100%",
            margin: "0 !important",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            borderRadius: "var(--br-7xs)",
            backgroundColor: "var(--color-lightseagreen)",
            border: "1px solid var(--border-brand-default)",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-300)",
            zIndex: 1,
          }}
        >
          <img
            className="starIcon"
            alt=""
            src="/star3.svg"
            style={{
              height: "20px",
              width: "20px",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              display: "none",
            }}
          />
        </div>
        <img
          className="listIcon"
          loading="lazy"
          alt=""
          src="/list.svg"
          style={{
            height: "48px",
            width: "48px",
            overflow: "hidden",
            flexShrink: 0,
            minHeight: "48px",
            position: "relative",
            zIndex: 2,
          }}
        />
        <div
          className="registroWrapper"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "var(--padding-4xs) 0 0",
          }}
        >
          <b
            className="registro"
            style={{
              alignSelf: "stretch",
              lineHeight: "100%",
              whiteSpace: "nowrap",
              position: "relative",
              zIndex: 2,
            }}
          >
            Registro
          </b>
        </div>
      </div>
      <img
        className="logoNoBackground1Icon"
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
        style={{
          height: "62px",
          width: "162px",
          bottom: "0",
          left: "65px",
          objectFit: "cover",
          zIndex: 1,
          position: "relative",
          margin: "0 !important",
        }}
      />
      <div
        className="navigation1"
        style={{
          width: "201px",
          margin: "0 !important",
          position: "absolute",
          top: "14px",
          right: "407px",
          padding: "var(--padding-8xs) var(--padding-3xs) var(--padding-xs)",
          gap: "var(--gap-12xs)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <div
          className="iconButton"
          style={{
            height: "100%",
            width: "100%",
            margin: "0 !important",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            borderRadius: "var(--br-7xs)",
            backgroundColor: "var(--color-lightseagreen)",
            border: "1px solid var(--border-brand-default)",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-300)",
            zIndex: 1,
          }}
        >
          <img
            className="starIcon"
            alt=""
            src="/star3.svg"
            style={{
              height: "20px",
              width: "20px",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              display: "none",
            }}
          />
        </div>
        <img
          className="homeIcon"
          loading="lazy"
          alt=""
          src="/home.svg"
          style={{
            height: "49px",
            width: "60px",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            mixBlendMode: "luminosity",
            zIndex: 2,
          }}
        />
        <div
          className="inicioWrapper"
          style={{
            flex: 1,
            flexDirection: "column",
            padding: "var(--padding-sm) 0 0",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <b
            className="registro"
            style={{
              alignSelf: "stretch",
              lineHeight: "100%",
              whiteSpace: "nowrap",
              position: "relative",
              zIndex: 2,
            }}
          >
            Inicio
          </b>
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;