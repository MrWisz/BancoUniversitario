import ComponenteMision from "../components/ComponenteMision";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Objetivos.module.css";

const Objetivos = () => {
  return (
    <div className={styles.objetivos}>
      <div className={styles.text} />
      <div className={styles.objetivo1} />
      <main className={styles.frameParent}>
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
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.objectiveContentWrapper}>
              <div className={styles.objectiveContent}>
                <img
                  className={styles.objetivo2Icon}
                  loading="lazy"
                  alt=""
                  src="/objetivo-2@2x.png"
                />
                <div className={styles.objetivosWrapper}>
                  <h3 className={styles.objetivos1}>Objetivos</h3>
                </div>
              </div>
            </div>
            <div className={styles.brindarALosContainer}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.brindarALos}>
                    Brindar a los estudiantes universitarios un servicio
                eficiente y de calidad en la gestión de sus recursos
                financieros, a través de nuestros canales digitales y nuestros
                puntos de atención presencial.
              </p>
              <p className={styles.brindarALos}>&nbsp;</p>
              <p className={styles.brindarALos}>
                     Fomentar el uso de nuestras plataformas digitales para
                hacer transferencias entre estudiantes sin comisión, depósitos y
                retiros en efectivo, ofreciendo herramientas tecnológicas
                fáciles y seguras.
              </p>
              <p className={styles.brindarALos}>&nbsp;</p>
              <p className={styles.brindarALos}>
                     Promover la educación financiera de los estudiantes
                universitarios, a través de charlas, talleres y capacitaciones
                sobre temas como el ahorro, la inversión y el uso responsable
                del crédito.
              </p>
              <p className={styles.brindarALos}>&nbsp;</p>
              <p className={styles.brindarALos}>
                      Establecer alianzas estratégicas con universidades y
                empresas para ofrecer beneficios exclusivos a nuestros clientes,
                tales como descuentos en matrículas, becas, prácticas laborales,
                entre otros.
              </p>
              <p className={styles.brindarALos}>&nbsp;</p>
              <p className={styles.mantenerUnaCultura}>
                {" "}
                Mantener una cultura de innovación y mejora continua en nuestros
                procesos, productos y servicios, para estar siempre a la
                vanguardia de las necesidades de nuestros clientes y del
                mercado.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent2 />
    </div>
  );
};

export default Objetivos;
