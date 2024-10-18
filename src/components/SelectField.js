import PropTypes from "prop-types";
import styles from "./SelectField.module.css";

const SelectField = ({
  className = "",
  value = "-------------------------",
  description = "Description",
  hasDescription = false,
  open1 = false,
  label = "Nacionalidad",
  hasLabel = true,
}) => {
  return (
    <div className={[styles.selectField, className].join(" ")}>
      {hasLabel && <h1 className={styles.label}>{label}</h1>}
      {hasDescription && (
        <div className={styles.description}>{description}</div>
      )}
      <div className={styles.select}>
        <div className={styles.value}>{value}</div>
        <img
          className={styles.chevronDownIcon}
          alt=""
          src="/chevron-down.svg"
        />
        {open1 && (
          <div className={styles.options}>
            <div className={styles.helloWorld}>Hello World</div>
            <div className={styles.option2}>Option 2</div>
            <div className={styles.option2}>Option 3</div>
            <div className={styles.option2}>Option 4</div>
            <div className={styles.option2}>Option 5</div>
          </div>
        )}
      </div>
      <div className={styles.options1}>
        <div className={styles.helloWorld}>-------------------------</div>
        <div className={styles.option21}>Option 2</div>
        <div className={styles.option21}>Option 3</div>
        <div className={styles.option21}>Option 4</div>
        <div className={styles.option21}>Option 5</div>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  hasDescription: PropTypes.bool,
  open1: PropTypes.bool,
  label: PropTypes.string,
  hasLabel: PropTypes.bool,
};

export default SelectField;
