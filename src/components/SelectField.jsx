import PropTypes from "prop-types";

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
    <div
      className={`selectField ${className}`}
      style={{
        width: "751px",
        display: "flex",
        padding: "0 0 var(--padding-11xs)",
        maxWidth: "100%",
        zIndex: 2,
        textAlign: "left",
        fontSize: "var(--body-base-size)",
        color: "var(--color-gray-200)",
        fontFamily: "var(--body-base)",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        gap: "var(--space-200)",
      }}
    >
      {hasLabel && (
        <h1
          className="label"
          style={{
            margin: "0",
            alignSelf: "stretch",
            fontSize: "var(--font-size-17xl)",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat-alternates)",
            flexShrink: 0,
            position: "relative",
            lineHeight: "140%",
          }}
        >
          {label}
        </h1>
      )}
      {hasDescription && (
        <div
          className="description"
          style={{
            width: "240px",
            color: "var(--text-default-secondary)",
            position: "relative",
            lineHeight: "140%",
          }}
        >
          {description}
        </div>
      )}
      <div
        className="select"
        style={{
          alignSelf: "stretch",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          padding: "var(--padding-3xs) var(--padding-2xs) var(--padding-3xs) var(--padding-mini)",
          minWidth: "240px",
          maxWidth: "100%",
          flexShrink: 0,
          color: "var(--color-lightseagreen)",
          borderRadius: "var(--radius-200)",
          backgroundColor: "var(--background-default-default)",
          border: "1px solid var(--border-default-default)",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "var(--space-200)",
        }}
      >
        <div
          className="value"
          style={{
            flex: 1,
            position: "relative",
            lineHeight: "100%",
            display: "inline-block",
            maxWidth: "calc(100% - 24px)",
          }}
        >
          {value}
        </div>
        <img
          className="chevronDownIcon"
          alt=""
          src="/chevron-down.svg"
          style={{
            height: "16px",
            width: "16px",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}
        />
        {open1 && (
          <div
            className="options"
            style={{
              boxShadow: "var(--drop-shadow-200)",
              flexDirection: "column",
              padding: "var(--padding-7xs) var(--padding-7xs) var(--padding-7xs) var(--space-200)",
              color: "var(--text-default-default)",
              borderRadius: "var(--radius-200)",
              backgroundColor: "var(--background-default-default)",
              border: "1px solid var(--border-default-default)",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "var(--space-200)",
              display: "flex",
            }}
          >
            <div
              className="helloWorld"
              style={{
                height: "22px",
                fontWeight: 600,
                display: "inline-block",
                position: "relative",
                lineHeight: "140%",
              }}
            >
              Hello World
            </div>
            <div
              className="option2"
              style={{
                position: "relative",
                lineHeight: "140%",
              }}
            >
              Option 2
            </div>
            <div
              className="option2"
              style={{
                position: "relative",
                lineHeight: "140%",
              }}
            >
              Option 3
            </div>
            <div
              className="option2"
              style={{
                position: "relative",
                lineHeight: "140%",
              }}
            >
              Option 4
            </div>
            <div
              className="option2"
              style={{
                position: "relative",
                lineHeight: "140%",
              }}
            >
              Option 5
            </div>
          </div>
        )}
      </div>
      <div
        className="options1"
        style={{
          width: "105px",
          boxShadow: "var(--drop-shadow-200)",
          borderRadius: "var(--radius-200)",
          backgroundColor: "var(--background-default-default)",
          border: "1px solid var(--border-default-default)",
          display: "none",
          padding: "var(--padding-7xs) var(--padding-sm)",
          color: "var(--text-default-default)",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          gap: "var(--space-200)",
        }}
      >
        <div
          className="helloWorld"
          style={{
            height: "22px",
            fontWeight: 600,
            display: "inline-block",
            position: "relative",
            lineHeight: "140%",
          }}
        >
          -------------------------
        </div>
        <div
          className="option21"
          style={{
            height: "22px",
            position: "relative",
            lineHeight: "140%",
            display: "inline-block",
          }}
        >
          Option 2
        </div>
        <div
          className="option21"
          style={{
            height: "22px",
            position: "relative",
            lineHeight: "140%",
            display: "inline-block",
          }}
        >
          Option 3
        </div>
        <div
          className="option21"
          style={{
            height: "22px",
            position: "relative",
            lineHeight: "140%",
            display: "inline-block",
          }}
        >
          Option 4
        </div>
        <div
          className="option21"
          style={{
            height: "22px",
            position: "relative",
            lineHeight: "140%",
            display: "inline-block",
          }}
        >
          Option 5
        </div>
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