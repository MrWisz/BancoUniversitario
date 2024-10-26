import Button from "./Button";
import PropTypes from "prop-types";

const Card = ({ className = "" }) => {
  const styles = {
    infoIcon: {
      height: "32px",
      width: "32px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    },
    depsitosEnEfectivo: {
      margin: 0,
      alignSelf: "stretch",
      position: "relative",
      fontSize: "inherit",
      letterSpacing: "-0.02em",
      lineHeight: "29px",
      fontWeight: 600,
      fontFamily: "inherit",
    },
    elBancoUniversitario: {
      alignSelf: "stretch",
      position: "relative",
      fontSize: "var(--body-base-size)",
      lineHeight: "140%",
      color: "var(--color-lightseagreen)",
    },
    text: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "var(--space-200)",
    },
    starIcon: {
      height: "16px",
      width: "16px",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
      display: "none",
      minHeight: "16px",
    },
    button1: {
      alignSelf: "stretch",
      position: "relative",
      lineHeight: "100%",
    },
    button: {
      height: "40px",
      borderRadius: "var(--radius-200)",
      overflow: "hidden",
      display: "none",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-300) var(--padding-4xs)",
      boxSizing: "border-box",
      gap: "var(--space-200)",
    },
    body: {
      display: "flex",
      alignItems: "flex-start",
      boxSizing: "border-box",
      maxWidth: "100%",
      flex: 1,
      flexDirection: "column",
      padding: "0 0 var(--padding-32xl)",
      gap: "var(--space-400)",
      minWidth: "160px",
      minHeight: "220px",
    },
    buttonGroup: {
      alignSelf: "stretch",
      display: "none",
      flexDirection: "row",
      alignItems: "center",
      gap: "var(--space-400)",
      fontSize: "var(--body-base-size)",
      color: "var(--text-neutral-default)",
    },
    card: {
      width: "500px",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "0 var(--padding-11xs) 0 0",
      gap: "24px 22px",
      minWidth: "240px",
      textAlign: "left",
      fontSize: "var(--font-size-5xl)",
      color: "var(--color)",
      fontFamily: "var(--font-montserrat-alternates)",
    },
  };

  return (
    <div className={className} style={styles.card}>
      <img style={styles.infoIcon} alt="" src="/info.svg" />
      <div style={styles.body}>
        <div style={styles.text}>
          <h3 style={styles.depsitosEnEfectivo}>Depósitos en efectivo</h3>
          <div style={styles.elBancoUniversitario}>
            El Banco Universitario permite a los estudiantes realizar depósitos
            en efectivo de manera sencilla y cómoda en cualquiera de sus
            sucursales. Este servicio está disponible las 24 horas del día, los
            7 días de la semana, lo que permite a los estudiantes realizar sus
            depósitos en cualquier momento que lo necesiten.
          </div>
        </div>
        <div style={styles.buttonGroup}>
          <div style={styles.button}>
            <img style={styles.starIcon} alt="" src="/star5.svg" />
            <div style={styles.button1}>Button</div>
            <img style={styles.starIcon} alt="" src="/x3.svg" />
          </div>
          <Button
            label="Button"
            hasIconStart={false}
            hasIconEnd={false}
            propHeight="40px"
            propBackgroundColor="#e3e3e3"
            propBorder="1px solid #767676"
            propPadding="var(--space-300) var(--padding-2xs)"
            propFlex="unset"
            propAlignSelf="unset"
            star="/star5.svg"
            propMinHeight="16px"
            showButton
            propAlignSelf1="stretch"
            propFontSize="16px"
            propColor="#1e1e1e"
            propFlex1="unset"
            propTextShadow="unset"
            propFontWeight="unset"
            propWidth="unset"
            x="/x3.svg"
            propMinHeight1="16px"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;