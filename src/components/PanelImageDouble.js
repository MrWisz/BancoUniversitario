import PropTypes from "prop-types";
import styles from "./PanelImageDouble.module.css";

const PanelImageDouble = ({ className = "", image, image1 }) => {
  return (
    <div className={[styles.panelImageDouble, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <img className={styles.imageIcon} alt="" src={image1} />
    </div>
  );
};

PanelImageDouble.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
};

export default PanelImageDouble;
