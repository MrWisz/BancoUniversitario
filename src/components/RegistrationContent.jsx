import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import PropTypes from "prop-types";

const RegistrationContent = ({ className = "" }) => {
  return (
    <div
      className={`registrationContent ${className}`}
      style={{
        flex: 1,
        justifyContent: "flex-start",
        gap: "var(--gap-27xl)",
        textAlign: "center",
        fontSize: "var(--font-size-29xl)",
        color: "var(--color)",
        fontFamily: "var(--font-montserrat-alternates)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "100%",
      }}
    >
      <div
        className="registraTuUsuarioWrapper"
        style={{
          width: "1861px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 var(--padding-xl)",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <h1
          className="registraTuUsuario"
          style={{
            margin: "0",
            width: "667px",
            position: "relative",
            fontSize: "inherit",
            lineHeight: "100%",
            fontWeight: 700,
            fontFamily: "inherit",
            display: "inline-block",
            flexShrink: 0,
            maxWidth: "100%",
          }}
        >
          {`Registra tu usuario `}
        </h1>
      </div>
      <div
        className="youngstersWithLaptopCafe1Parent"
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-end",
          padding: "var(--padding-366xl) var(--padding-451xl) var(--padding-103xl)",
          boxSizing: "border-box",
          position: "relative",
          textAlign: "left",
          fontSize: "var(--body-base-size)",
          color: "var(--color-gray-200)",
          fontFamily: "var(--body-base)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "100%",
        }}
      >
        <div
          className="youngstersWithLaptopCafe1"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            margin: "0 !important",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            borderRadius: "var(--br-21xl)",
          }}
        />
        <div
          className="rectangleParent"
          style={{
            width: "931px",
            borderRadius: "var(--br-21xl)",
            backgroundColor: "var(--color-lightseagreen)",
            alignItems: "center",
            padding: "var(--padding-54xl) var(--padding-xl) var(--padding-60xl)",
            boxSizing: "border-box",
            gap: "var(--gap-35xl)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            maxWidth: "100%",
          }}
        >
          <div
            className="frameChild"
            style={{
              width: "931px",
              height: "666px",
              position: "relative",
              borderRadius: "var(--br-21xl)",
              backgroundColor: "var(--color-lightseagreen)",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            className="inputFieldParent"
            style={{
              width: "754px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "var(--gap-12xl)",
              maxWidth: "100%",
            }}
          >
            <InputField
              description="Description"
              hasError={false}
              label="Nombres y Apellidos"
              error="Error"
              hasLabel
              hasDescription={false}
              propHeight="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propPadding="unset"
              propColor="#fff"
              propMargin="0"
              propFontWeight="700"
              propOverflow="hidden"
              propFontSize="16px"
              propColor1="#1e1e1e"
              propFontFamily="Inter"
              propHeight1="16px"
            />
            <div
              className="additionalInput"
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0 var(--padding-10xs) 0 0",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <InputField
                description="Description"
                hasError={false}
                label="Cédula de Identidad"
                error="Error"
                hasLabel
                hasDescription={false}
                propHeight="unset"
                propMaxHeight="unset"
                propAlignSelf="unset"
                propFlex="1"
                propPadding="0px 0px 2px"
                propColor="#fff"
                propMargin="0"
                propFontWeight="700"
                propOverflow="hidden"
                propFontSize="16px"
                propColor1="#1e1e1e"
                propFontFamily="Inter"
                propHeight1="16px"
              />
            </div>
            <InputField
              value="Ingrese formato AAAA/MM/DD"
              description="Description"
              hasError={false}
              label="Fecha de Nacimiento"
              error="Error"
              hasLabel
              hasDescription={false}
              propHeight="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propPadding="0px 0px 50px"
              propColor="#fffefe"
              propMargin="0"
              propFontWeight="700"
              propOverflow="hidden"
              propFontSize="28px"
              propColor1="#49beb7"
              propFontFamily="'Montserrat Alternates'"
              propHeight1="unset"
            />
          </div>
          <SelectField
            value="-------------------------"
            description="Description"
            hasDescription
            open1
            label="Nacionalidad"
            hasLabel
          />
        </div>
        <div
          className="registrationButtonWrapperWrapper"
          style={{
            width: "887px",
            height: "86px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          <button
            className="registrationButtonWrapper"
            style={{
              cursor: "pointer",
              border: 0,
              padding: "0 var(--padding-8xl) 0 0",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              width: "293px",
              flexDirection: "row",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              boxSizing: "border-box",
            }}
          >
            <Button
              label="Continuar"
              hasIconStart={false}
              hasIconEnd={false}
              propHeight="unset"
              propBackgroundColor="#085f63"
              propBorder="1px solid #49beb7"
              propPadding="var(--space-300)"
              propFlex="1"
              propAlignSelf="stretch"
              star="/star4.svg"
              propMinHeight="unset"
              showButton={false}
              propAlignSelf1="unset"
              propFontSize="40px"
              propColor="#fff"
              propFlex1="unset"
              propTextShadow="unset"
              propFontWeight="unset"
              propWidth="204px"
              x="/x2.svg"
              propMinHeight1="unset"
            />
            <div
              className="registrationButtonLabel"
              style={{
                width: "232px",
                flexDirection: "column",
                padding: "var(--padding-5xl) 0 0",
                marginLeft: "-259px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                boxSizing: "border-box",
              }}
            >
              <b
                className="continuar"
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "var(--font-size-17xl)",
                  lineHeight: "100%",
                  fontFamily: "var(--font-montserrat-alternates)",
                  color: "var(--background-default-default)",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                Continuar
              </b>
            </div>
          </button>
        </div>
        <div
          className="frameItem"
          style={{
            width: "279px",
            height: "275px",
            position: "absolute",
            margin: "0 !important",
            top: "166px",
            left: "796px",
            filter: "blur(4px)",
            borderRadius: "50%",
            backgroundColor: "var(--color)",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

RegistrationContent.propTypes = {
  className: PropTypes.string,
};

export default RegistrationContent;