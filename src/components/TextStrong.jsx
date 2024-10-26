import { useMemo } from "react";
import PropTypes from "prop-types";

const TextStrong = ({
  className = "",
  text = "Contacto",
  propFlex,
  propAlignSelf,
}) => {
  const textStrongStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`textStrong ${className}`}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--color)",
        fontFamily: "var(--font-montserrat-alternates)",
        ...textStrongStyle,
      }}
    >
      <div
        className="textStrong1"
        style={{
          position: "relative",
          lineHeight: "140%",
          fontWeight: 600,
          display: "inline-block",
          minWidth: "76px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

TextStrong.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TextStrong;