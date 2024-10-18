import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={[styles.headerParent, className].join(" ")}>
      <Header
        menu16IconAlignSelf="stretch"
        menu16IconMarginLeft="-1px"
        block={false}
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
        headerPadding="var(--space-800)"
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
