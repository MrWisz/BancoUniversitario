import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = ({
  className = "",
  value = "Usuario",
  description = "Description",
  hasError = false,
  label = "Contraseña",
  error = "Error",
  hasLabel = true,
  hasDescription = false,
  propHeight,
  propMaxHeight,
  propAlignSelf,
  propFlex,
  propPadding,
  propColor,
  propMargin,
  propFontWeight,
  propOverflow,
  propFontSize,
  propColor1,
  propFontFamily,
  propHeight1,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      height: propHeight,
      maxHeight: propMaxHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
    };
  }, [propHeight, propMaxHeight, propAlignSelf, propFlex, propPadding]);

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propColor, propMargin, propFontWeight]);

  const inputStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const valueStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor1,
      fontFamily: propFontFamily,
      height: propHeight1,
    };
  }, [propFontSize, propColor1, propFontFamily, propHeight1]);

  return (
    <div
      className={[styles.inputField, className].join(" ")}
      style={inputFieldStyle}
    >
      {hasLabel && (
        <b className={styles.label} style={labelStyle}>
          {label}
        </b>
      )}
      {hasDescription && (
        <div className={styles.description}>{description}</div>
      )}
      <div className={styles.input} style={inputStyle}>
        <div className={styles.value} style={valueStyle}>
          {value}
        </div>
      </div>
      {hasError && <div className={styles.error}>{error}</div>}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  hasLabel: PropTypes.bool,
  hasDescription: PropTypes.bool,

  /** Style props */
  propHeight: PropTypes.any,
  propMaxHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
  propMargin: PropTypes.any,
  propFontWeight: PropTypes.any,
  propOverflow: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor1: PropTypes.any,
  propFontFamily: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default InputField;
