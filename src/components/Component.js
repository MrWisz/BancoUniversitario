import { useMemo } from "react";
import Footer from "./Footer";
import PropTypes from "prop-types";
import styles from "./Component.module.css";

const Component = ({
  className = "",
  propMarginTop,
  propAlignSelf,
  propFlex,
}) => {
  const component1Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propMarginTop, propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.component1, className].join(" ")}
      data-scroll-to="component1Container"
      style={component1Style}
    >
      <Footer
        text="Dirección"
        propFlex="unset"
        propAlignSelf="stretch"
        hasTitle
      />
      <div className={styles.infobancouniversitariocomve}>
        info@bancouniversitario.com.ve
      </div>
      <div className={styles.direccinAvUniversidad}>
        Dirección: Av. Universidad, Edificio Banco Universitario, piso 12,
        Caracas, Venezuela.
      </div>
      <div className={styles.telefono}>

      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Component;
