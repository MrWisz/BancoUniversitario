import TextStrong from "./TextStrong";
import TextLinkListItem from "./TextLinkListItem";
import PropTypes from "prop-types";

const TextLinkList = ({
  className = "",
  hasTitle = true,
  text,
  propFlex,
  propAlignSelf,
}) => {
  return (
    <div
      className={`textLinkList ${className}`}
      style={{
        width: "262px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "var(--space-300)",
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--text-default-default)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      {hasTitle && (
        <div
          className="title"
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0 0 var(--space-400)",
            color: "var(--color)",
          }}
        >
          <TextStrong
            text={text}
            propFlex={propFlex}
            propAlignSelf={propAlignSelf}
          />
        </div>
      )}
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
          }}
        >
          Design
        </div>
      </div>
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem1"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
            display: "inline-block",
            width: "100%",
            height: "100%",
          }}
        >
          Prototyping
        </div>
      </div>
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
          }}
        >
          Development features
        </div>
      </div>
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
          }}
        >
          Design systems
        </div>
      </div>
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
          }}
        >
          Collaboration features
        </div>
      </div>
      <div
        className="textLinkListItem"
        style={{
          width: "89px",
          height: "22px",
          position: "relative",
          display: "none",
        }}
      >
        <div
          className="listItem"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            lineHeight: "140%",
          }}
        >
          Design process
        </div>
      </div>
      <TextLinkListItem />
    </div>
  );
};

TextLinkList.propTypes = {
  className: PropTypes.string,
  hasTitle: PropTypes.bool,
  text: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
};

export default TextLinkList;