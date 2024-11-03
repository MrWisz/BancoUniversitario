import Component from "./Component";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <footer
      className={`component1Wrapper ${className}`}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0 0 0 var(--padding-12xs)",
        boxSizing: "border-box",
        maxWidth: "100%",
      }}
    >
      <Component propMarginTop="unset" propAlignSelf="unset" propFlex="1" />
    </footer>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;