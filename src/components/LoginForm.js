import InputField from "./InputField";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.css";

const LoginForm = ({ className = "" }) => {
  return (
    <section className={[styles.loginForm, className].join(" ")}>
      <div className={styles.inputFields}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.icons8User801}
            loading="lazy"
            alt=""
            src="/icons8user80-1@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.ingreseSuContrasea}>Ingrese su contraseña</div>
          <img
            className={styles.eyeOffIcon}
            loading="lazy"
            alt=""
            src="/eye-off.svg"
          />
          <div className={styles.emailInputParent}>
            <div className={styles.emailInput}>
              <InputField
                value="Usuario"
                description="Description"
                hasError={false}
                label="Usuario"
                error="Error"
                hasLabel
                hasDescription={false}
                propHeight="126px"
                propMaxHeight="126px"
                propAlignSelf="stretch"
                propFlex="unset"
                propPadding="0px 0px 76px"
                propColor="#fff"
                propMargin="unset"
                propFontWeight="unset"
                propOverflow="hidden"
                propFontSize="36px"
                propColor1="#fff"
                propFontFamily="'Montserrat Alternates'"
                propHeight1="unset"
              />
              <div className={styles.ingreseSuEmail}>Ingrese su email</div>
              <img className={styles.eyeOffIcon1} alt="" src="/eye-off.svg" />
            </div>
            <div className={styles.userError}>
              <div className={styles.obligatorioDebeIntroducir}>
                Obligatorio: Debe introducir un usuario o número de cuenta
              </div>
              <InputField
                value="Usuario"
                description="Description"
                hasError
                label="Contraseña"
                error="Error"
                hasLabel
                hasDescription
              />
            </div>
            <div className={styles.passwordError}>
              <div className={styles.obligatorioDebeIntroducir1}>
                Obligatorio: Debe introducir contraseña
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                label="¿Olvidó su contraseña?"
                hasIconStart={false}
                hasIconEnd={false}
                propHeight="unset"
                propBackgroundColor="rgba(44, 44, 44, 0)"
                propBorder="1px solid #085f63"
                propPadding="4px 3px 4px 4px"
                propFlex="1"
                propAlignSelf="unset"
                star="/star4.svg"
                propMinHeight="unset"
                showButton
                propAlignSelf1="unset"
                propFontSize="28px"
                propColor="#0c0b0b"
                propFlex1="1"
                propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                propFontWeight="bold"
                propWidth="unset"
                x="/x2.svg"
                propMinHeight1="unset"
              />
            </div>
          </div>
          <div className={styles.socialButtons}>
            <div className={styles.socialOptions}>
              <div className={styles.buttonPair}>
                <button className={styles.button}>
                  <img className={styles.starIcon} alt="" src="/star4.svg" />
                  <div className={styles.button1}>Ingresar</div>
                  <img className={styles.starIcon} alt="" src="/x2.svg" />
                </button>
              </div>
              <button className={styles.button2}>
                <img className={styles.starIcon} alt="" src="/star1.svg" />
                <div className={styles.button1}>Cancelar</div>
                <img className={styles.starIcon} alt="" src="/x1.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
