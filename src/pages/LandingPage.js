/*import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import PanelImageDouble from "../components/PanelImageDouble";
import CardGridIcon from "../components/CardGridIcon";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./LandingPage.module.css";



const LandingPage = () => {
  const navigate = useNavigate();

  const onQuienesSomosTextClick = useCallback(() => {
    navigate("/quienes-somos");
  }, [navigate]);

  const onObjetivosTextClick = useCallback(() => {
    navigate("/objetivos");
  }, [navigate]);

  const onServiciosTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cardGridIcon']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactoTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component1Container']"
    );
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
 
    <div className={styles.landingPage}>
      <div className={styles.text} />
      <header className={styles.headerParent}>
        
        <Header
          block
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
        />
        <img
          className={styles.logoNoBackground1Icon}
          loading="lazy"
          alt=""
          src="/logonobackground-1@2x.png"
        />
        <h2 className={styles.quienesSomos} onClick={onQuienesSomosTextClick}>
          Quienes somos
        </h2>
        <h2 className={styles.objetivos} onClick={onObjetivosTextClick}>
          Objetivos
        </h2>
        <h2 className={styles.servicios} onClick={onServiciosTextClick}>
          Servicios
        </h2>
        <h2 className={styles.contacto} onClick={onContactoTextClick}>
          Contacto
        </h2>
        <div className={styles.menu}>
          <div className={styles.menuChild} />
          <h2 className={styles.acceso} onClick={onAccesoTextClick}>
            Acceso
          </h2>
        </div>
        <div className={styles.menu1}>
          <div className={styles.menuItem} />
          <h2 className={styles.registro} onClick={onRegistroTextClick}>
            Registro
          </h2>
        </div>
      </header>
      <section className={styles.content}>
        <PanelImageDouble image="/image@2x.png" image1="/image-1@2x.png" />
        <CardGridIcon />
      </section>
      <FrameComponent1 />
    </div>
  );
};

export default LandingPage;*/
