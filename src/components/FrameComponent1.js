import PanelImageDouble from "./PanelImageDouble";
import Component from "./Component";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.panelImageDoubleParent, className].join(" ")}>
      <PanelImageDouble image="/image-2@2x.png" image1="/image-3@2x.png" />
      <Component />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
