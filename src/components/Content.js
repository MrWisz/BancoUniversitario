import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.missionVision}>
        <div className={styles.objectiveMission}>
          <div className={styles.missionContainer}>
            <img
              className={styles.objetivo2Icon}
              loading="lazy"
              alt=""
              src="/objetivo-21@2x.png"
            />
            <div className={styles.misinWrapper}>
              <h3 className={styles.misin}>Misión</h3>
            </div>
          </div>
        </div>
        <h3 className={styles.somosUnaInstitucin}>
          Somos una institución financiera comprometida con los estudiantes
          universitarios, brindando soluciones financieras ágiles y eficientes.
          Nuestra misión es facilitar la gestión de sus recursos y contribuir al
          crecimiento económico y personal de nuestros clientes.
        </h3>
        <div className={styles.objectiveMission1}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-1@2x.png"
            />
            <div className={styles.misinWrapper}>
              <h3 className={styles.misin}>Visión</h3>
            </div>
          </div>
        </div>
        <div className={styles.financialOption}>
          <h3 className={styles.queremosSerLa}>
            Queremos ser la mejor opción financiera para estudiantes
            universitarios en el país. Deseamos ser reconocidos por nuestros
            servicios innovadores, la calidad de atención al cliente y nuestro
            compromiso con la educación y el desarrollo social.
          </h3>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
