import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <img className={styles.infoIcon} alt="" src="/info.svg" />
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.depsitosEnEfectivo}>Depósitos en efectivo</h3>
          <div className={styles.elBancoUniversitario}>
            El Banco Universitario permite a los estudiantes realizar depósitos
            en efectivo de manera sencilla y cómoda en cualquiera de sus
            sucursales. Este servicio está disponible las 24 horas del día, los
            7 días de la semana, lo que permite a los estudiantes realizar sus
            depósitos en cualquier momento que lo necesiten.
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star5.svg" />
            <div className={styles.button1}>Button</div>
            <img className={styles.starIcon} alt="" src="/x3.svg" />
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