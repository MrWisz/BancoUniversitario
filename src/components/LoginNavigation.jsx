import Button from "./Button";
import PropTypes from "prop-types";

const LoginNavigation = ({ className = "" }) => {
  return (
    <header
      className={`loginNavigation ${className}`}
      style={{
        alignSelf: "stretch",
        height: "99px",
        position: "relative",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "var(--font-size-17xl)",
        color: "var(--background-default-default)",
        fontFamily: "var(--font-montserrat-alternates)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <div
        className="header"
        style={{
          alignSelf: "stretch",
          flex: 1,
          backgroundColor: "var(--background-default-default)",
          borderBottom: "1px solid var(--border-default-default)",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: "var(--space-800)",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "var(--body-base-size)",
          color: "var(--text-default-default)",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="block"
          style={{
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "var(--gap-5xl)",
          }}
        >
          <div
            className="iconButton"
            style={{
              height: "44px",
              width: "44px",
              borderRadius: "var(--scale-06)",
              backgroundColor: "var(--text-brand-on-brand)",
              border: "1px solid var(--border-default-default)",
              boxSizing: "border-box",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-300) var(--padding-2xs)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              className="menu16Icon"
              alt=""
              src="/menu16.svg"
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            />
          </div>
          <div
            className="iconButton"
            style={{
              height: "44px",
              width: "44px",
              borderRadius: "var(--scale-06)",
              backgroundColor: "var(--text-brand-on-brand)",
              border: "1px solid var(--border-default-default)",
              boxSizing: "border-box",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-300) var(--padding-2xs)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              className="menu16Icon"
              alt=""
              src="/x16.svg"
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            />
          </div>
          <input
            className="figma"
            type="checkbox"
            style={{
              margin: "0",
              height: "35px",
              width: "40px",
            }}
          />
        </div>
        <div
          className="navigationPillList"
          style={{
            height: "32px",
            width: "870px",
            display: "none",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--space-200)",
            maxWidth: "100%",
          }}
        >
          <div
            className="navigationPill"
            style={{
              borderRadius: "var(--radius-200)",
              backgroundColor: "var(--text-brand-on-brand)",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-200) var(--padding-8xs)",
            }}
          >
            <div
              className="title"
              style={{
                position: "relative",
                lineHeight: "100%",
              }}
            >
              Pricing
            </div>
          </div>
          <div
            className="navigationPill1"
            style={{
              alignSelf: "stretch",
              borderRadius: "var(--radius-200)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "none",
              padding: "var(--space-200) var(--padding-8xs)",
            }}
          >
            <div
              className="title1"
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Solutions
            </div>
          </div>
          <div
            className="navigationPill2"
            style={{
              alignSelf: "stretch",
              borderRadius: "var(--radius-200)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "var(--space-200)",
            }}
          >
            <div
              className="title1"
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Community
            </div>
          </div>
          <div
            className="navigationPill2"
            style={{
              alignSelf: "stretch",
              borderRadius: "var(--radius-200)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "var(--space-200)",
            }}
          >
            <div
              className="title1"
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Resources
            </div>
          </div>
          <div
            className="navigationPill2"
            style={{
              alignSelf: "stretch",
              borderRadius: "var(--radius-200)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "var(--space-200)",
            }}
          >
            <div
              className="title1"
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Pricing
            </div>
          </div>
          <div
            className="navigationPill2"
            style={{
              alignSelf: "stretch",
              borderRadius: "var(--radius-200)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "var(--space-200)",
            }}
          >
            <div
              className="title1"
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Contact
            </div>
          </div>
        </div>
        <div
          className="headerAuth"
          style={{
            height: "32px",
            width: "178px",
            display: "none",
            alignItems: "center",
            gap: "var(--space-300)",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Button
            label="Sign in"
            hasIconStart={false}
            hasIconEnd={false}
            propHeight="unset"
            propBackgroundColor="#e3e3e3"
            propBorder="1px solid #767676"
            propPadding="var(--space-200)"
            propFlex="1"
            propAlignSelf="stretch"
            star="/star.svg"
            propMinHeight="16px"
            showButton
            propAlignSelf1="stretch"
            propFontSize="16px"
            propColor="#1e1e1e"
            propFlex1="unset"
            propTextShadow="unset"
            propFontWeight="unset"
            propWidth="unset"
            x="/x.svg"
            propMinHeight1="16px"
          />
          <Button
            label="Register"
            hasIconStart={false}
            hasIconEnd={false}
            propHeight="unset"
            propBackgroundColor="#2c2c2c"
            propBorder="1px solid #2c2c2c"
            propPadding="var(--space-200) var(--padding-6xs)"
            propFlex="1"
            propAlignSelf="stretch"
            star="/star1.svg"
            propMinHeight="16px"
            showButton
            propAlignSelf1="stretch"
            propFontSize="16px"
            propColor="#f5f5f5"
            propFlex1="unset"
            propTextShadow="unset"
            propFontWeight="unset"
            propWidth="unset"
            x="/x1.svg"
            propMinHeight1="16px"
          />
        </div>
      </div>
      <div
        className="loginButtons"
        style={{
          width: "248px",
          margin: "0 !important",
          position: "absolute",
          top: "calc(50% - 33.5px)",
          right: "64px",
          flexDirection: "row",
          padding: "var(--padding-5xs) var(--padding-4xs) var(--padding-3xs)",
          gap: "var(--gap-11xs)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="iconButton2"
          style={{
            height: "100%",
            width: "100%",
            margin: "0 !important",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            borderRadius: "var(--br-7xs)",
            backgroundColor: "var(--color-lightseagreen)",
            border: "1px solid var(--border-brand-default)",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-300)",
            zIndex: 1,
          }}
        >
          <img
            className="starIcon"
            alt=""
            src="/star2.svg"
            style={{
              height: "20px",
              width: "20px",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              display: "none",
            }}
          />
        </div>
        <img
          className="logInIcon"
          loading="lazy"
          alt=""
          src="/log-in.svg"
          style={{
            width: "74px",
            maxHeight: "100%",
            overflow: "hidden",
            flexShrink: 0,
            minHeight: "49px",
            alignSelf: "stretch",
            position: "relative",
            zIndex: 2,
          }}
        />
        <div
          className="loginLabels"
          style={{
            width: "147px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "var(--padding-2xs) 0 0",
            boxSizing: "border-box",
          }}
        >
          <h1
            className="acceso"
            style={{
              margin: "0",
              fontSize: "inherit",
              lineHeight: "100%",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              alignSelf: "stretch",
              position: "relative",
              zIndex: 2,
            }}
          >
            Acceso
          </h1>
        </div>
      </div>
      <img
        className="logoNoBackground1Icon"
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
        style={{
          height: "calc(100% - 17px)",
          width: "562px",
          position: "absolute",
          margin: "0 !important",
          top: "6px",
          bottom: "11px",
          left: "46px",
          maxHeight: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <div
        className="loginButtons1"
        style={{
          width: "219px",
          margin: "0 !important",
          position: "absolute",
          top: "calc(50% - 33.5px)",
          right: "347px",
          padding: "var(--padding-8xs) var(--padding-mini) var(--padding-xs)",
          boxSizing: "border-box",
          gap: "var(--gap-3xs)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <div
          className="iconButton2"
          style={{
            height: "100%",
            width: "100%",
            margin: "0 !important",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            borderRadius: "var(--br-7xs)",
            backgroundColor: "var(--color-lightseagreen)",
            border: "1px solid var(--border-brand-default)",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-300)",
            zIndex: 1,
          }}
        >
          <img
            className="starIcon"
            alt=""
            src="/star3.svg"
            style={{
              height: "20px",
              width: "20px",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              display: "none",
            }}
          />
        </div>
        <img
          className="homeIcon"
          loading="lazy"
          alt=""
          src="/home.svg"
          style={{
            height: "49px",
            width: "60px",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            mixBlendMode: "luminosity",
            zIndex: 2,
          }}
        />
        <div
          className="inicioWrapper"
          style={{
            flex: 1,
            flexDirection: "column",
            padding: "var(--padding-sm) 0 0",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <h1
            className="acceso"
            style={{
              margin: "0",
              fontSize: "inherit",
              lineHeight: "100%",
              fontWeight: 700,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              alignSelf: "stretch",
              position: "relative",
              zIndex: 2,
            }}
          >
            Inicio
          </h1>
        </div>
      </div>
    </header>
  );
};

LoginNavigation.propTypes = {
  className: PropTypes.string,
};

export default LoginNavigation;