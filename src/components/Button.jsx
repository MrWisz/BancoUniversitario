import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  label = "Button",
  hasIconStart = false,
  hasIconEnd = false,
  propHeight,
  propBackgroundColor,
  propBorder,
  propPadding,
  propFlex,
  propAlignSelf,
  star,
  propMinHeight,
  showButton,
  propAlignSelf1,
  propFontSize,
  propColor,
  propFlex1,
  propTextShadow,
  propFontWeight,
  propWidth,
  x,
  propMinHeight1,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      height: propHeight,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      padding: propPadding,
      flex: propFlex,
      alignSelf: propAlignSelf,
      borderRadius: "var(--radius-200)",
      boxSizing: "border-box",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-300) var(--padding-2xs)",
      gap: "var(--space-200)",
      textAlign: "left",
      fontSize: "var(--body-base-size)",
      color: "var(--text-default-default)",
      fontFamily: "var(--font-montserrat-alternates)",
    };
  }, [
    propHeight,
    propBackgroundColor,
    propBorder,
    propPadding,
    propFlex,
    propAlignSelf,
  ]);

  const starIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
      height: "16px",
      width: "16px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
      display: "none",
    };
  }, [propMinHeight]);

  const button1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      fontSize: propFontSize,
      color: propColor,
      flex: propFlex1,
      textShadow: propTextShadow,
      fontWeight: propFontWeight,
      width: propWidth,
      alignSelf: "stretch",
      position: "relative",
      lineHeight: "100%",
    };
  }, [
    propAlignSelf1,
    propFontSize,
    propColor,
    propFlex1,
    propTextShadow,
    propFontWeight,
    propWidth,
  ]);

  const xIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight1,
      height: "16px",
      width: "16px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
      display: "none",
    };
  }, [propMinHeight1]);

  return (
    <div className={className} style={buttonStyle}>
      {hasIconStart && (
        <img
          alt=""
          src={star}
          style={starIconStyle}
        />
      )}
      {showButton && (
        <div style={button1Style}>
          {label}
        </div>
      )}
      {hasIconEnd && (
        <img alt="" src={x} style={xIconStyle} />
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hasIconStart: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  star: PropTypes.string,
  showButton: PropTypes.bool,
  x: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinHeight: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propFlex1: PropTypes.any,
  propTextShadow: PropTypes.any,
  propFontWeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMinHeight1: PropTypes.any,
};

export default Button;