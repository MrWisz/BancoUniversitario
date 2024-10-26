import PropTypes from "prop-types";

const TextLinkListItem = ({ className = "" }) => {
  return (
    <div
      className={`textLinkListItem ${className}`}
      style={{
        width: "89px",
        height: "22px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--color-lightseagreen)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <div
        className="listItem"
        style={{
          position: "absolute",
          margin: "0 !important",
          top: "calc(50% - 22px)",
          right: "-119px",
          lineHeight: "140%",
        }}
      >
        <p
          className="telfono582125555555"
          style={{
            margin: "0",
          }}
        >
          Teléfono: +58 212-555-5555
        </p>
        <p
          className="telfono582125555555"
          style={{
            margin: "0",
          }}
        >
          Fax: +58 212-555-5556
        </p>
      </div>
    </div>
  );
};

TextLinkListItem.propTypes = {
  className: PropTypes.string,
};

export default TextLinkListItem;