import PropTypes from "prop-types";
import styles from "./TextLinkListItem.module.css";

const TextLinkListItem = ({ className = "" }) => {
  return (
    <div className={[styles.textLinkListItem, className].join(" ")}>
      <div className={styles.listItem}>
        <p className={styles.telfono582125555555}>Teléfono: +58 212-555-5555</p>
        <p className={styles.telfono582125555555}>Fax: +58 212-555-5556</p>
      </div>
    </div>
  );
};

TextLinkListItem.propTypes = {
  className: PropTypes.string,
};

export default TextLinkListItem;
