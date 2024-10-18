import { useCallback } from "react";
import Header from "./Header";
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
      <Header
        menu16IconAlignSelf="unset"
        menu16IconMarginLeft="unset"
        block={block}
        label="Sign in"
        label1="Register"
        hasIconStart={false}
        hasIconStart1={false}
        hasIconEnd={false}
        hasIconEnd1={false}
        showButton
        showButton1
        propHeight="unset"
        propHeight1="unset"
        propBackgroundColor="#e3e3e3"
        propBackgroundColor1="#2c2c2c"
        propBorder="1px solid #767676"
        propBorder1="1px solid #2c2c2c"
        propPadding="var(--space-200)"
        propPadding1="var(--space-200) var(--padding-6xs)"
        propFlex="1"
        propFlex1="1"
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propMinHeight="16px"
        propMinHeight1="16px"
        propAlignSelf11="stretch"
        propAlignSelf12="stretch"
        propFontSize="16px"
        propFontSize1="16px"
        propColor="#1e1e1e"
        propColor1="#f5f5f5"
        propFlex11="unset"
        propFlex12="unset"
        propTextShadow="unset"
        propTextShadow1="unset"
        propFontWeight="unset"
        propFontWeight1="unset"
        propWidth="unset"
        propWidth1="unset"
        propMinHeight11="16px"
        propMinHeight12="16px"
        headerPadding="var(--space-800) var(--space-800) var(--padding-11xl)"
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
