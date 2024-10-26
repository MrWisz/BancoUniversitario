import InputField from "./InputField";
import Button from "./Button";
import PropTypes from "prop-types";

const LoginForm = ({ className = "" }) => {
  return (
    <section
      className={`loginForm ${className}`}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 var(--padding-xl) var(--padding-77xl) var(--padding-6xl)",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "var(--font-size-9xl)",
        color: "var(--color-lightseagreen)",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <div
        className="inputFields"
        style={{
          height: "1059px",
          width: "1813px",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <div
          className="ellipseParent"
          style={{
            position: "absolute",
            top: "0",
            left: "618px",
            width: "511px",
            height: "493px",
          }}
        >
          <div
            className="frameChild"
            style={{
              position: "absolute",
              top: "17px",
              left: "0",
              filter: "blur(4px)",
              borderRadius: "50%",
              backgroundColor: "var(--color)",
              width: "511px",
              height: "476px",
              zIndex: 1,
            }}
          />
          <img
            className="icons8User801"
            loading="lazy"
            alt=""
            src="/icons8user80-1@2x.png"
            style={{
              position: "absolute",
              top: "0",
              left: "39px",
              width: "450px",
              height: "450px",
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        </div>
        <div
          className="rectangleParent"
          style={{
            position: "absolute",
            top: "267px",
            left: "0",
            borderRadius: "var(--br-21xl)",
            backgroundColor: "var(--color-lightseagreen)",
            width: "100%",
            flexDirection: "row",
            padding: "var(--padding-196xl) var(--padding-101xl) var(--padding-125xl)",
            gap: "var(--gap-110xl)",
            maxWidth: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            className="frameItem"
            style={{
              height: "792px",
              width: "1813px",
              position: "relative",
              borderRadius: "var(--br-21xl)",
              backgroundColor: "var(--color-lightseagreen)",
              display: "none",
              maxWidth: "100%",
              zIndex: 0,
            }}
          />
          <div
            className="ingreseSuContrasea"
            style={{
              width: "968px",
              bottom: "271px",
              left: "150px",
              lineHeight: "100%",
              display: "inline-block",
              position: "absolute",
              margin: "0 !important",
              zIndex: 2,
            }}
          >
            Ingrese su contraseña
          </div>
          <img
            className="eyeOffIcon"
            loading="lazy"
            alt=""
            src="/eye-off.svg"
            style={{
              height: "48px",
              width: "48px",
              right: "633px",
              bottom: "261px",
              overflow: "hidden",
              flexShrink: 0,
              position: "absolute",
              margin: "0 !important",
              zIndex: 2,
            }}
          />
          <div
            className="emailInputParent"
            style={{
              width: "1124px",
              flexDirection: "column",
              gap: "var(--gap-lgi)",
              fontSize: "var(--font-size-3xl)",
              color: "var(--color-crimson)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              maxWidth: "100%",
            }}
          >
            <div
              className="emailInput"
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                position: "relative",
                maxWidth: "100%",
                fontSize: "var(--font-size-9xl)",
                color: "var(--color-lightseagreen)",
              }}
            >
              <InputField
                value="Usuario"
                description="Description"
                hasError={false}
                label="Usuario"
                error="Error"
                hasLabel
                hasDescription={false}
                propHeight="126px"
                propMaxHeight="126px"
                propAlignSelf="stretch"
                propFlex="unset"
                propPadding="0px 0px 76px"
                propColor="#fff"
                propMargin="unset"
                propFontWeight="unset"
                propOverflow="hidden"
                propFontSize="36px"
                propColor1="#fff"
                propFontFamily="'Montserrat Alternates'"
                propHeight1="unset"
              />
              <div
                className="ingreseSuEmail"
                style={{
                  width: "968px",
                  bottom: "19px",
                  left: "26px",
                  lineHeight: "100%",
                  display: "inline-block",
                  position: "absolute",
                  margin: "0 !important",
                  zIndex: 3,
                }}
              >
                Ingrese su email
              </div>
              <img
                className="eyeOffIcon1"
                alt=""
                src="/eye-off.svg"
                style={{
                  width: "48px",
                  height: "48px",
                  right: "62px",
                  bottom: "8px",
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "absolute",
                  margin: "0 !important",
                  zIndex: 3,
                }}
              />
            </div>
            <div
              className="userError"
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0 0 var(--padding-lgi)",
                boxSizing: "border-box",
                gap: "var(--gap-xl)",
                maxWidth: "100%",
              }}
            >
              <div
                className="obligatorioDebeIntroducir"
                style={{
                  width: "700px",
                  position: "relative",
                  display: "inline-block",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  maxWidth: "100%",
                  zIndex: 1,
                }}
              >
                Obligatorio: Debe introducir un usuario o número de cuenta
              </div>
              <InputField
                value="Usuario"
                description="Description"
                hasError
                label="Contraseña"
                error="Error"
                hasLabel
                hasDescription
              />
            </div>
            <div
              className="passwordError"
              style={{
                width: "700px",
                flexDirection: "row",
                padding: "0 0 var(--padding-mid)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                className="obligatorioDebeIntroducir1"
                style={{
                  flex: 1,
                  position: "relative",
                  display: "inline-block",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  maxWidth: "100%",
                  zIndex: 1,
                }}
              >
                Obligatorio: Debe introducir contraseña
              </div>
            </div>
            <div
              className="buttonWrapper"
              style={{
                width: "379px",
                flexDirection: "row",
                padding: "0 var(--padding-xs)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <Button
                label="¿Olvidó su contraseña?"
                hasIconStart={false}
                hasIconEnd={false}
                propHeight="unset"
                propBackgroundColor="rgba(44, 44, 44, 0)"
                propBorder="1px solid #085f63"
                propPadding="4px 3px 4px 4px"
                propFlex="1"
                propAlignSelf="unset"
                star="/star4.svg"
                propMinHeight="unset"
                showButton
                propAlignSelf1="unset"
                propFontSize="28px"
                propColor="#0c0b0b"
                propFlex1="1"
                propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                propFontWeight="bold"
                propWidth="unset"
                x="/x2.svg"
                propMinHeight1="unset"
              />
            </div>
          </div>
          <div
            className="socialButtons"
            style={{
              width: "233px",
              padding: "var(--padding-38xl) 0 0",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <div
              className="socialOptions"
              style={{
                alignSelf: "stretch",
                gap: "var(--gap-82xl)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div
                className="buttonPair"
                style={{
                  alignSelf: "stretch",
                  flexDirection: "row",
                  padding: "0 0 0 var(--padding-10xs)",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <button
                  className="button"
                  style={{
                    cursor: "pointer",
                    border: "1px solid var(--border-brand-default)",
                    padding: "var(--padding-4xl) var(--padding-13xl) var(--padding-4xl) var(--padding-14xl)",
                    backgroundColor: "var(--color)",
                    flex: 1,
                    borderRadius: "var(--radius-200)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "var(--space-200)",
                    zIndex: 1,
                  }}
                >
                  <img
                    className="starIcon"
                    alt=""
                    src="/star4.svg"
                    style={{
                      height: "16px",
                      width: "16px",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      display: "none",
                    }}
                  />
                  <div
                    className="button1"
                    style={{
                      position: "relative",
                      fontSize: "var(--font-size-17xl)",
                      lineHeight: "100%",
                      fontWeight: 600,
                      fontFamily: "var(--font-montserrat-alternates)",
                      color: "var(--background-default-default)",
                      textAlign: "left",
                    }}
                  >
                    Ingresar
                  </div>
                  <img
                    className="starIcon"
                    alt=""
                    src="/x2.svg"
                    style={{
                      height: "16px",
                      width: "16px",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      display: "none",
                    }}
                  />
                </button>
              </div>
              <button
                className="button2"
                style={{
                  cursor: "pointer",
                  border: "1px solid var(--border-brand-default)",
                  padding: "var(--padding-4xl) var(--padding-10xl)",
                  backgroundColor: "var(--color)",
                  borderRadius: "var(--radius-200)",
                  overflow: "hidden",
                  flexDirection: "row",
                  gap: "var(--space-200)",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  className="starIcon"
                  alt=""
                  src="/star1.svg"
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "none",
                  }}
                />
                <div
                  className="button1"
                  style={{
                    position: "relative",
                    fontSize: "var(--font-size-17xl)",
                    lineHeight: "100%",
                    fontWeight: 600,
                    fontFamily: "var(--font-montserrat-alternates)",
                    color: "var(--background-default-default)",
                    textAlign: "left",
                  }}
                >
                  Cancelar
                </div>
                <img
                  className="starIcon"
                  alt=""
                  src="/x1.svg"
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;