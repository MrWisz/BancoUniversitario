import { useMemo } from "react";
import PropTypes from "prop-types";

const Component = ({
  className = "",
  propMarginTop,
  propAlignSelf,
  propFlex,
}) => {
  const component1Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propMarginTop, propAlignSelf, propFlex]);

  return (
    <div
      className={`component1 ${className}`}
      data-scroll-to="component1Container"
      style={{
        alignSelf: "stretch",
        height: "202px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        maxWidth: "100%",
        zIndex: 1,
        marginTop: "-14px",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--color-lightseagreen)",
        fontFamily: "var(--font-montserrat-alternates)",
        ...component1Style,
      }}
    >
      <div
        className="infobancouniversitariocomve"
        style={{
          position: "absolute",
          margin: "0 !important",
          bottom: "63px",
          left: "588px",
          lineHeight: "23px",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        info@bancouniversitario.com.ve
      </div>
      <div
        className="direccinAvUniversidad"
        style={{
          width: "187px",
          position: "absolute",
          margin: "0 !important",
          bottom: "25px",
          left: "310px",
          lineHeight: "140%",
          display: "inline-block",
          zIndex: 1,
        }}
      >
        Dirección: Av. Universidad, Edificio Banco Universitario, piso 12,
        Caracas, Venezuela.
      </div>
      <div
        className="telefono"
        style={{
          width: "187px",
          position: "absolute",
          margin: "0 !important",
          bottom: "25px",
          left: "310px",
          lineHeight: "140%",
          display: "inline-block",
          zIndex: 1,
        }}
      >
        {/* Add phone number here */}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Component;