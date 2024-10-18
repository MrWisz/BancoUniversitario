import PropTypes from "prop-types";
import styles from "./TextContentHeading.module.css";

const TextContentHeading = ({
  className = "",
  subheading = "A continuación podrás encontrar un desglose detallado de los servicios que podrás disfrutar al ser cliente del Banco Universitario",
  hasSubheading = true,
  heading = "Servicios del Banco Universitario",
}) => {
  return (
    <div className={[styles.textContentHeading, className].join(" ")}>
      <h3 className={styles.heading}>{heading}</h3>
      {hasSubheading && <div className={styles.subheading}>{subheading}</div>}
    </div>
  );
};

TextContentHeading.propTypes = {
  className: PropTypes.string,
  subheading: PropTypes.string,
  hasSubheading: PropTypes.bool,
  heading: PropTypes.string,
};

export default TextContentHeading;
