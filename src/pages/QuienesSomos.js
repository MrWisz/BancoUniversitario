import ComponenteMision from "../components/ComponenteMision";
import Contenido from "../components/Contenido.js";
import Component from "../components/Component";
import styles from "./QuienesSomos.module.css";


const QuienesSomos = () => {
  return (
    <div className={styles.quienesSomos}>
      <div className={styles.text} />
       <ComponenteMision  
        logoNoBackground1="/logonobackground-1@2x.png"
        label="Sign in"
        label="Register"
        hasIconStart={false}
        hasIconStart={false}
        hasIconEnd={false}
        hasIconEnd={false}
        showButton
        showButton
        propHeight2="unset"
        propHeight2="unset"
        propBackgroundColor="#e3e3e3"
        propBackgroundColor="#2c2c2c"
        propBorder="1px solid #767676"
        propBorder="1px solid #2c2c2c"
        propPadding="var(--space-200)"
        propPadding="var(--space-200) var(--padding-6xs)"
        propFlex="1"
        propFlex="1"
        propAlignSelf="stretch"
        propAlignSelf="stretch"
        propMinHeight="16px"
        propMinHeight="16px"
        propAlignSelf1="stretch"
        propAlignSelf1="stretch"
        propFontSize="16px"
        propFontSize="16px"
        propColor="#1e1e1e"
        propColor="#f5f5f5"
        propFlex1="unset"
        propFlex1="unset"
        propTextShadow="unset"
        propTextShadow="unset"
        propFontWeight="unset"
        propFontWeight="unset"
        propWidth="unset"
        propWidth="unset"
        propMinHeight1="16px"
        propMinHeight1="16px"
        block
      />
      <div className={styles.objetivo1} />
      <Contenido />
      <Component
        propMarginTop="unset"
        propAlignSelf="stretch"
        propFlex="unset"
      />
    </div>
  );
};

export default QuienesSomos;
