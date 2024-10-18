import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextStrong.module.css";

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
      className={[styles.textStrong, className].join(" ")}
      style={textStrongStyle}
    >
      <div className={styles.textStrong1}>{text}</div>
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
