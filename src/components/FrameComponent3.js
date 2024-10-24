import HeaderComponent from "../components/HeaderComponent"; // Asegúrate de que la ruta sea correcta
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={[styles.headerParent, className].join(" ")}>
      <HeaderComponent
        onQuienesSomosTextClick={() => {}}
        onObjetivosTextClick={() => {}}
        onServiciosTextClick={() => {}}
        onContactoTextClick={() => {}}
        onAccesoTextClick={() => {}}
        onRegistroTextClick={() => {}}
      />
      <div className={styles.navigation}>
        <div className={styles.iconButton}>
          <img className={styles.starIcon} alt="" src="/star3.svg" />
        </div>
        <img
          className={styles.listIcon}
          loading="lazy"
          alt=""
          src="/list.svg"
        />
        <div className={styles.registroWrapper}>
          <b className={styles.registro}>Registro</b>
        </div>
      </div>
      <img
        className={styles.logoNoBackground1Icon}
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
      />
      <div className={styles.navigation1}>
        <div className={styles.iconButton}>
          <img className={styles.starIcon} alt="" src="/star3.svg" />
        </div>
        <img
          className={styles.homeIcon}
          loading="lazy"
          alt=""
          src="/home.svg"
        />
        <div className={styles.inicioWrapper}>
          <b className={styles.registro}>Inicio</b>
        </div>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;