import PanelImageDouble from "./PanelImageDouble";
import Component from "./Component";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`panelImageDoubleParent ${className}`}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--color-lightseagreen)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <PanelImageDouble image="/image-2@2x.png" image1="/image-3@2x.png" />
      <Component />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;