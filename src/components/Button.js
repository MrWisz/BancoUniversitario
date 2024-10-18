import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

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
    };
  }, [propMinHeight1]);

  return (
    <div className={[styles.button, className].join(" ")} style={buttonStyle}>
      {hasIconStart && (
        <img
          className={styles.starIcon}
          alt=""
          src={star}
          style={starIconStyle}
        />
      )}
      {showButton && (
        <div className={styles.button1} style={button1Style}>
          {label}
        </div>
      )}
      {hasIconEnd && (
        <img className={styles.starIcon} alt="" src={x} style={xIconStyle} />
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
