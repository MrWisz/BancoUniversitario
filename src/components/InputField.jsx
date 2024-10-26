import { useMemo } from "react";
import PropTypes from "prop-types";

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
      className={`inputField ${className}`}
      style={{
        alignSelf: "stretch",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0 0 var(--padding-31xl)",
        boxSizing: "border-box",
        gap: "var(--space-200)",
        maxWidth: "100%",
        zIndex: 1,
        textAlign: "left",
        fontSize: "var(--font-size-17xl)",
        color: "var(--background-default-default)",
        fontFamily: "var(--font-montserrat-alternates)",
        ...inputFieldStyle,
      }}
    >
      {hasLabel && (
        <b
          className="label"
          style={{
            alignSelf: "stretch",
            flexShrink: 0,
            position: "relative",
            lineHeight: "140%",
            ...labelStyle,
          }}
        >
          {label}
        </b>
      )}
      {hasDescription && (
        <div
          className="description"
          style={{
            width: "240px",
            fontSize: "var(--body-base-size)",
            fontFamily: "var(--body-base)",
            color: "var(--text-default-secondary)",
            position: "relative",
            lineHeight: "140%",
          }}
        >
          {description}
        </div>
      )}
      <div
        className="input"
        style={{
          alignSelf: "stretch",
          borderRadius: "var(--radius-200)",
          backgroundColor: "var(--background-default-default)",
          border: "1px solid var(--border-default-default)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "var(--padding-3xs) var(--padding-mini)",
          minWidth: "240px",
          flexShrink: 0,
          maxWidth: "100%",
          ...inputStyle,
        }}
      >
        <div
          className="value"
          style={{
            flex: 1,
            display: "inline-block",
            maxWidth: "100%",
            position: "relative",
            lineHeight: "140%",
            ...valueStyle,
          }}
        >
          {value}
        </div>
      </div>
      {hasError && (
        <div
          className="error"
          style={{
            width: "37px",
            position: "relative",
            fontSize: "var(--body-base-size)",
            lineHeight: "140%",
            fontFamily: "var(--body-base)",
            color: "var(--text-default-default)",
          }}
        >
          {error}
        </div>
      )}
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