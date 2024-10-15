import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./RegistrationContent.module.css";

const RegistrationContent = ({ className = "" }) => {
  return (
    <div className={[styles.registrationContent, className].join(" ")}>
      <div className={styles.registraTuUsuarioWrapper}>
        <h1 className={styles.registraTuUsuario}>{`Registra tu usuario `}</h1>
      </div>
      <div className={styles.youngstersWithLaptopCafe1Parent}>
        <div className={styles.youngstersWithLaptopCafe1} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.inputFieldParent}>
            <InputField
              description="Description"
              hasError={false}
              label="Nombres y Apellidos"
              error="Error"
              hasLabel
              hasDescription={false}
              propHeight="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propPadding="unset"
              propColor="#fff"
              propMargin="0"
              propFontWeight="700"
              propOverflow="hidden"
              propFontSize="16px"
              propColor1="#1e1e1e"
              propFontFamily="Inter"
              propHeight1="16px"
            />
            <div className={styles.additionalInput}>
              <InputField
                description="Description"
                hasError={false}
                label="Cédula de Identidad"
                error="Error"
                hasLabel
                hasDescription={false}
                propHeight="unset"
                propMaxHeight="unset"
                propAlignSelf="unset"
                propFlex="1"
                propPadding="0px 0px 2px"
                propColor="#fff"
                propMargin="0"
                propFontWeight="700"
                propOverflow="hidden"
                propFontSize="16px"
                propColor1="#1e1e1e"
                propFontFamily="Inter"
                propHeight1="16px"
              />
            </div>
            <InputField
              value="Ingrese formato AAAA/MM/DD"
              description="Description"
              hasError={false}
              label="Fecha de Nacimiento"
              error="Error"
              hasLabel
              hasDescription={false}
              propHeight="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propPadding="0px 0px 50px"
              propColor="#fffefe"
              propMargin="0"
              propFontWeight="700"
              propOverflow="hidden"
              propFontSize="28px"
              propColor1="#49beb7"
              propFontFamily="'Montserrat Alternates'"
              propHeight1="unset"
            />
          </div>
          <SelectField
            value="-------------------------"
            description="Description"
            hasDescription
            open1
            label="Nacionalidad"
            hasLabel
          />
        </div>
        <div className={styles.registrationButtonWrapperWrapper}>
          <button className={styles.registrationButtonWrapper}>
            <Button
              label="Continuar"
              hasIconStart={false}
              hasIconEnd={false}
              propHeight="unset"
              propBackgroundColor="#085f63"
              propBorder="1px solid #49beb7"
              propPadding="var(--space-300)"
              propFlex="1"
              propAlignSelf="stretch"
              star="/star4.svg"
              propMinHeight="unset"
              showButton={false}
              propAlignSelf1="unset"
              propFontSize="40px"
              propColor="#fff"
              propFlex1="unset"
              propTextShadow="unset"
              propFontWeight="unset"
              propWidth="204px"
              x="/x2.svg"
              propMinHeight1="unset"
            />
            <div className={styles.registrationButtonLabel}>
              <b className={styles.continuar}>Continuar</b>
            </div>
          </button>
        </div>
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

RegistrationContent.propTypes = {
  className: PropTypes.string,
};

export default RegistrationContent;
