import PropTypes from "prop-types";

const TextContentHeading = ({
  className = "",
  subheading = "A continuación podrás encontrar un desglose detallado de los servicios que podrás disfrutar al ser cliente del Banco Universitario",
  hasSubheading = true,
  heading = "Servicios del Banco Universitario",
}) => {
  return (
    <div
      className={`textContentHeading ${className}`}
      style={{
        width: "1308px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "var(--space-200)",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "var(--font-size-5xl)",
        color: "var(--color)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <h3
        className="heading"
        style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "inherit",
          letterSpacing: "-0.02em",
          lineHeight: "29px",
          fontWeight: 600,
          fontFamily: "inherit",
        }}
      >
        {heading}
      </h3>
      {hasSubheading && (
        <div
          className="subheading"
          style={{
            position: "relative",
            fontSize: "var(--font-size-xl)",
            letterSpacing: "-0.01px",
            lineHeight: "120%",
            color: "var(--color-lightseagreen)",
          }}
        >
          {subheading}
        </div>
      )}
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