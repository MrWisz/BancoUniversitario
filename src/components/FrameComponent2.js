import Component from "./Component";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <footer className={[styles.component1Wrapper, className].join(" ")}>
      <Component propMarginTop="unset" propAlignSelf="unset" propFlex="1" />
    </footer>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
