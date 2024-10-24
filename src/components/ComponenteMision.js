import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent"; 
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ComponenteMision.module.css";

const ComponenteMision = ({
  className = "",
  logoNoBackground1,
  label,
  hasIconStart,
  hasIconEnd,
  showButton,
  propHeight2,
  propBackgroundColor,
  propBorder,
  propPadding,
  propFlex,
  propAlignSelf,
  propMinHeight,
  propAlignSelf1,
  propFontSize,
  propColor,
  propFlex1,
  propTextShadow,
  propFontWeight,
  propWidth,
  propMinHeight1,
  block,
}) => {
  const navigate = useNavigate();

  const onQuienesSomosTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onObjetivosTextClick = useCallback(() => {
    navigate("/objetivos");
  }, [navigate]);

  const onServiciosTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactoTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='component1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccesoTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegistroTextClick = useCallback(() => {
    navigate("/registro-de-usuarios");
  }, [navigate]);

  return (
    <header className={[styles.headerParent, className].join(" ")}>
      <HeaderComponent
        onQuienesSomosTextClick={onQuienesSomosTextClick}
        onObjetivosTextClick={onObjetivosTextClick}
        onServiciosTextClick={onServiciosTextClick}
        onContactoTextClick={onContactoTextClick}
        onAccesoTextClick={onAccesoTextClick}
        onRegistroTextClick={onRegistroTextClick}
      />
      <img
        className={styles.logoNoBackground1Icon}
        alt=""
        src={logoNoBackground1}
      />
      <div className={styles.quienesSomos} onClick={onQuienesSomosTextClick}>
        Quienes somos
      </div>
      <div className={styles.objetivos} onClick={onObjetivosTextClick}>
        Objetivos
      </div>
      <div className={styles.servicios} onClick={onServiciosTextClick}>
        Servicios
      </div>
      <div className={styles.contacto} onClick={onContactoTextClick}>
        Contacto
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationChild} />
        <div className={styles.acceso} onClick={onAccesoTextClick}>
          Acceso
        </div>
      </div>
      <div className={styles.navigation1}>
        <div className={styles.navigationItem} />
        <div className={styles.registro} onClick={onRegistroTextClick}>
          Registro
        </div>
      </div>
    </header>
  );
};

ComponenteMision.propTypes = {
  className: PropTypes.string,
  logoNoBackground1: PropTypes.string,
  label: PropTypes.string,
  hasIconStart: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  showButton: PropTypes.bool,
  propHeight2: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBorder: PropTypes.string,
  propPadding: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propMinHeight: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propFontSize: PropTypes.string,
  propColor: PropTypes.string,
  propFlex1: PropTypes.string,
  propTextShadow: PropTypes.string,
  propFontWeight: PropTypes.string,
  propWidth: PropTypes.string,
  propMinHeight1: PropTypes.string,
  block: PropTypes.bool,
};

export default ComponenteMision;