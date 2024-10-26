import PropTypes from "prop-types";

const PanelImageDouble = ({ className = "", image, image1 }) => {
  return (
    <div
      className={`panelImageDouble ${className}`}
      style={{
        backgroundColor: "var(--background-default-default)",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "var(--space-1600)",
        boxSizing: "border-box",
        gap: "var(--space-1200)",
        opacity: 0.8,
        alignSelf: "stretch",
        maxWidth: "100%",
      }}
    >
      <img
        className="imageIcon"
        alt=""
        src={image}
        style={{
          flex: 1,
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
          minWidth: "599px",
          minHeight: "350px",
          alignSelf: "stretch",
          maxWidth: "100%",
        }}
      />
      <img
        className="imageIcon"
        alt=""
        src={image1}
        style={{
          flex: 1,
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
          minWidth: "599px",
          minHeight: "350px",
          alignSelf: "stretch",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

PanelImageDouble.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
};

export default PanelImageDouble;