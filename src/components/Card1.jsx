import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Card1 = ({
  className = "",
  asset = true,
  body = "El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.",
  heading = "Cobro de becas estudiantiles",
  button = false,
  propHeight,
  propHeight1,
  propDisplay,
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
}) => {
  const cardStyle = useMemo(() => {
    return {
      height: propHeight,
      width: "500px",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "0 var(--padding-11xs) var(--padding-32xl) 0",
      boxSizing: "border-box",
      gap: "24px 22px",
      minWidth: "240px",
      textAlign: "left",
      fontSize: "var(--font-size-5xl)",
      color: "var(--color)",
      fontFamily: "var(--font-montserrat-alternates)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      maxWidth: "100%",
      marginBottom: 'var(--space-1600)', // Ajuste de margen inferior
    };
  }, [propHeight]);

  const bodyTextForStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
      fontSize: "var(--body-base-size)",
      lineHeight: "140%",
      color: "var(--color-lightseagreen)",
      alignSelf: "stretch",
      position: "relative",
    };
  }, [propHeight1, propDisplay]);

  const styles = {
    infoIcon: {
      height: "32px",
      width: "32px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    },
    title: {
      margin: 0,
      fontSize: "inherit",
      letterSpacing: "-0.02em",
      lineHeight: "29px",
      fontWeight: 600,
      fontFamily: "inherit",
      alignSelf: "stretch",
      position: "relative",
    },
    text: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "var(--space-200)",
    },
    starIcon: {
      height: "16px",
      width: "16px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
      display: "none",
      minHeight: "16px",
    },
    button1: {
      alignSelf: "stretch",
      position: "relative",
      lineHeight: "100%",
    },
    button: {
      height: "40px",
      borderRadius: "var(--radius-200)",
      overflow: "hidden",
      display: "none",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-300) var(--padding-4xs)",
      boxSizing: "border-box",
      gap: "var(--space-200)",
    },
    body: {
      display: "flex",
      alignItems: "flex-start",
      flex: 1,
      flexDirection: "column",
      gap: "var(--space-400)",
      minWidth: "160px",
      justifyContent: "flex-start",
      maxWidth: "100%",
    },
    buttonGroup: {
      width: "384px",
      flexDirection: "row",
      alignItems: "center",
      gap: "var(--space-400)",
      fontSize: "var(--body-base-size)",
      color: "var(--text-neutral-default)",
      justifyContent: "flex-start",
      maxWidth: "100%",
    },
  };

  return (
    <div className={className} style={cardStyle}>
      {asset && <img style={styles.infoIcon} alt="" src="/info.svg" />}
      <div style={styles.body}>
        <div style={styles.text}>
          <h3 style={styles.title}>{heading}</h3>
          <div style={bodyTextForStyle}>
            {body}
          </div>
        </div>
        {button && (
          <div style={styles.buttonGroup}>
            <div style={styles.button}>
              <img style={styles.starIcon} alt="" src="/star5.svg" />
              <div style={styles.button1}>Button</div>
              <img style={styles.starIcon} alt="" src="/x3.svg" />
            </div>
            <Button
              label={label}
              hasIconStart={hasIconStart}
              hasIconEnd={hasIconEnd}
              propHeight={propHeight2}
              propBackgroundColor={propBackgroundColor}
              propBorder={propBorder}
              propPadding={propPadding}
              propFlex={propFlex}
              propAlignSelf={propAlignSelf}
              star="/star5.svg"
              propMinHeight={propMinHeight}
              showButton={showButton}
              propAlignSelf1={propAlignSelf1}
              propFontSize={propFontSize}
              propColor={propColor}
              propFlex1={propFlex1}
              propTextShadow={propTextShadow}
              propFontWeight={propFontWeight}
              propWidth={propWidth}
              x="/x3.svg"
              propMinHeight1={propMinHeight1}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  asset: PropTypes.bool,
  body: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.bool,
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

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Card1;