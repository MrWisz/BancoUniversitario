import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.images1Parent}>
        <img
          className={styles.images1Icon}
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
        />
        <img
          className={styles.download1Icon}
          loading="lazy"
          alt=""
          src="/download-1@2x.png"
        />
        <img
          className={styles.images2Icon}
          loading="lazy"
          alt=""
          src="/images-2@2x.png"
        />
      </div>
      <div className={styles.cancelOptionsParent}>
        <div className={styles.cancelOptions}>
          <div className={styles.cancelaTuMatrcula}>¡Cancela tu matrícula!</div>
          <div className={styles.sigueAdelante}>Sigue adelante...</div>
        </div>
        <div className={styles.alcanzaLaMetaWrapper}>
          <div className={styles.alcanzaLaMeta}>¡Alcanza la meta!</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
