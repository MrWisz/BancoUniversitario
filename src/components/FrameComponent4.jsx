import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`frameParent ${className}`}
      style={{
        alignSelf: "stretch",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "0 var(--padding-81xl) 0 var(--padding-87xl)",
        boxSizing: "border-box",
        gap: "var(--gap-8xl)",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "var(--font-size-17xl)",
        color: "var(--color)",
        fontFamily: "var(--font-montserrat-alternates)",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <div
        className="images1Parent"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "var(--gap-smi-3)",
          alignSelf: "stretch",
          maxWidth: "100%",
        }}
      >
        <img
          className="images1Icon"
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            minHeight: "400px",
            alignSelf: "flex-start",
            width: "256px",
            maxWidth: "100%",
          }}
        />
        <img
          className="download1Icon"
          loading="lazy"
          alt=""
          src="/download-1@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            minHeight: "400px",
            flex: 1,
            overflow: "hidden",
            minWidth: "408px",
            alignSelf: "stretch",
            maxWidth: "100%",
          }}
        />
        <img
          className="images2Icon"
          loading="lazy"
          alt=""
          src="/images-2@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            minHeight: "400px",
            width: "555.1px",
            alignSelf: "stretch",
            maxWidth: "100%",
          }}
        />
      </div>
      <div
        className="cancelOptionsParent"
        style={{
          marginLeft: "-124px",
          width: "2114px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "117%",
          flexShrink: 0,
          rowGap: "20px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div
          className="cancelOptions"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            minWidth: "959px",
            flexShrink: 0,
            maxWidth: "100%",
            gap: "var(--gap-xl)",
          }}
        >
          <div
            className="cancelaTuMatrcula"
            style={{
              position: "relative",
              lineHeight: "100%",
              display: "inline-block",
              flexShrink: 0,
              maxWidth: "100%",
              width: "655px",
              textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            ¡Cancela tu matrícula!
          </div>
          <div
            className="sigueAdelante"
            style={{
              position: "relative",
              lineHeight: "100%",
              display: "inline-block",
              flexShrink: 0,
              maxWidth: "100%",
              height: "102px",
              width: "697px",
              textAlign: "left",
              minWidth: "697px",
            }}
          >
            Sigue adelante...
          </div>
        </div>
        <div
          className="alcanzaLaMetaWrapper"
          style={{
            width: "697px",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "var(--padding-lg) 0 0",
            boxSizing: "border-box",
            minHeight: "19px",
            maxWidth: "100%",
            marginLeft: "-59px",
            textAlign: "left",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            className="alcanzaLaMeta"
            style={{
              alignSelf: "stretch",
              height: "-3.7px",
              position: "relative",
              lineHeight: "100%",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            ¡Alcanza la meta!
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;