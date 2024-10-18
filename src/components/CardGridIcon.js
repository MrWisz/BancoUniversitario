import TextContentHeading from "./TextContentHeading";
import Card1 from "./Card1";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./CardGridIcon.module.css";

const CardGridIcon = ({ className = "" }) => {
  return (
    <div
      className={[styles.cardGridIcon, className].join(" ")}
      data-scroll-to="cardGridIcon"
    >
      <TextContentHeading
        subheading="A continuación podrás encontrar un desglose detallado de los servicios que podrás disfrutar al ser cliente del Banco Universitario"
        hasSubheading
        heading="Servicios del Banco Universitario"
      />
      <div className={styles.cards}>
        <Card1
          asset
          body="El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones."
          heading="Transferencias entre estudiantes sin comisión"
          button={false}
          propHeight="220px"
          propHeight1="176px"
          propDisplay="inline-block"
          label="Button"
          hasIconStart={false}
          hasIconEnd={false}
          showButton
          propHeight2="40px"
          propBackgroundColor="#e3e3e3"
          propBorder="1px solid #767676"
          propPadding="var(--space-300) var(--padding-2xs)"
          propFlex="unset"
          propAlignSelf="unset"
          propMinHeight="16px"
          propAlignSelf1="stretch"
          propFontSize="16px"
          propColor="#1e1e1e"
          propFlex1="unset"
          propTextShadow="unset"
          propFontWeight="unset"
          propWidth="unset"
          propMinHeight1="16px"
        />
        <Card />
        <Card1
          asset
          body="El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos."
          heading="Retiros en efectivo"
          button={false}
          propHeight="unset"
          propHeight1="unset"
          propDisplay="unset"
          label="Button"
          hasIconStart={false}
          hasIconEnd={false}
          showButton
          propHeight2="40px"
          propBackgroundColor="#e3e3e3"
          propBorder="1px solid #767676"
          propPadding="var(--space-300) var(--padding-2xs)"
          propFlex="unset"
          propAlignSelf="unset"
          propMinHeight="16px"
          propAlignSelf1="stretch"
          propFontSize="16px"
          propColor="#1e1e1e"
          propFlex1="unset"
          propTextShadow="unset"
          propFontWeight="unset"
          propWidth="unset"
          propMinHeight1="16px"
        />
        <Card1
          asset
          body="El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten."
          heading="Pago de matrícula estudiantil"
          button={false}
          propHeight="unset"
          propHeight1="unset"
          propDisplay="unset"
          label="Button"
          hasIconStart={false}
          hasIconEnd={false}
          showButton
          propHeight2="40px"
          propBackgroundColor="#e3e3e3"
          propBorder="1px solid #767676"
          propPadding="var(--space-300) var(--padding-2xs)"
          propFlex="unset"
          propAlignSelf="unset"
          propMinHeight="16px"
          propAlignSelf1="stretch"
          propFontSize="16px"
          propColor="#1e1e1e"
          propFlex1="unset"
          propTextShadow="unset"
          propFontWeight="unset"
          propWidth="unset"
          propMinHeight1="16px"
        />
        <Card1
          asset
          body="El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura."
          heading="Cobro de becas estudiantiles"
          button
          label="Button"
          hasIconStart
          hasIconEnd
          showButton
        />
      </div>
    </div>
  );
};

CardGridIcon.propTypes = {
  className: PropTypes.string,
};

export default CardGridIcon;
