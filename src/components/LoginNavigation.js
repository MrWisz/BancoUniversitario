import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./LoginNavigation.module.css";

const LoginNavigation = ({ className = "" }) => {
  return (
    <header className={[styles.loginNavigation, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.block}>
          <div className={styles.iconButton}>
            <img className={styles.menu16Icon} alt="" src="/menu16.svg" />
          </div>
          <div className={styles.iconButton}>
            <img className={styles.menu16Icon} alt="" src="/x16.svg" />
          </div>
          <input className={styles.figma} type="checkbox" />
        </div>
        <div className={styles.navigationPillList}>
          <div className={styles.navigationPill}>
            <div className={styles.title}>Pricing</div>
          </div>
          <div className={styles.navigationPill1}>
            <div className={styles.title1}>Solutions</div>
          </div>
          <div className={styles.navigationPill2}>
            <div className={styles.title1}>Community</div>
          </div>
          <div className={styles.navigationPill2}>
            <div className={styles.title1}>Resources</div>
          </div>
          <div className={styles.navigationPill2}>
            <div className={styles.title1}>Pricing</div>
          </div>
          <div className={styles.navigationPill2}>
            <div className={styles.title1}>Contact</div>
          </div>
        </div>
        <div className={styles.headerAuth}>
          <Button
            label="Sign in"
            hasIconStart={false}
            hasIconEnd={false}
            propHeight="unset"
            propBackgroundColor="#e3e3e3"
            propBorder="1px solid #767676"
            propPadding="var(--space-200)"
            propFlex="1"
            propAlignSelf="stretch"
            star="/star.svg"
            propMinHeight="16px"
            showButton
            propAlignSelf1="stretch"
            propFontSize="16px"
            propColor="#1e1e1e"
            propFlex1="unset"
            propTextShadow="unset"
            propFontWeight="unset"
            propWidth="unset"
            x="/x.svg"
            propMinHeight1="16px"
          />
          <Button
            label="Register"
            hasIconStart={false}
            hasIconEnd={false}
            propHeight="unset"
            propBackgroundColor="#2c2c2c"
            propBorder="1px solid #2c2c2c"
            propPadding="var(--space-200) var(--padding-6xs)"
            propFlex="1"
            propAlignSelf="stretch"
            star="/star1.svg"
            propMinHeight="16px"
            showButton
            propAlignSelf1="stretch"
            propFontSize="16px"
            propColor="#f5f5f5"
            propFlex1="unset"
            propTextShadow="unset"
            propFontWeight="unset"
            propWidth="unset"
            x="/x1.svg"
            propMinHeight1="16px"
          />
        </div>
      </div>
      <div className={styles.loginButtons}>
        <div className={styles.iconButton2}>
          <img className={styles.starIcon} alt="" src="/star2.svg" />
        </div>
        <img
          className={styles.logInIcon}
          loading="lazy"
          alt=""
          src="/log-in.svg"
        />
        <div className={styles.loginLabels}>
          <h1 className={styles.acceso}>Acceso</h1>
        </div>
      </div>
      <img
        className={styles.logoNoBackground1Icon}
        loading="lazy"
        alt=""
        src="/logonobackground-1@2x.png"
      />
      <div className={styles.loginButtons1}>
        <div className={styles.iconButton2}>
          <img className={styles.starIcon} alt="" src="/star3.svg" />
        </div>
        <img
          className={styles.homeIcon}
          loading="lazy"
          alt=""
          src="/home.svg"
        />
        <div className={styles.inicioWrapper}>
          <h1 className={styles.acceso}>Inicio</h1>
        </div>
      </div>
    </header>
  );
};

LoginNavigation.propTypes = {
  className: PropTypes.string,
};

export default LoginNavigation;
