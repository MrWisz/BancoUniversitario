import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Card1.module.css";

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
    };
  }, [propHeight]);

  const bodyTextForStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      {asset && <img className={styles.infoIcon} alt="" src="/info.svg" />}
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.title}>{heading}</h3>
          <div className={styles.bodyTextFor} style={bodyTextForStyle}>
            {body}
          </div>
        </div>
        {button && (
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star5.svg" />
              <div className={styles.button1}>Button</div>
              <img className={styles.starIcon} alt="" src="/x3.svg" />
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
