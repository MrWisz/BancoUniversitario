/*import ComponenteMision from "../components/ComponenteMision";
import FrameComponent2 from "../components/FrameComponent2";
const Objetivos = () => {
    return (
      <div className={objetivos}>
        <div className={text} />
        <div className={objetivo1} />
        <main className={frameParent}>
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
          <section className={frameWrapper}>
            <div className={frameGroup}>
              <div className={objectiveContentWrapper}>
                <div className={objectiveContent}>
                  <img
                    className={styles.objetivo2Icon}
                    loading="lazy"
                    alt=""
                    src="/objetivo-2@2x.png"
                  />
                  <div className={objetivosWrapper}>
                    <h3 className={objetivos1}>Objetivos</h3>
                  </div>
                </div>
              </div>
              <div className={brindarALosContainer}>
                <p className={blankLine}>&nbsp;</p>
                <p className={brindarALos}>
                      Brindar a los estudiantes universitarios un servicio
                  eficiente y de calidad en la gestión de sus recursos
                  financieros, a través de nuestros canales digitales y nuestros
                  puntos de atención presencial.
                </p>
                <p className={brindarALos}>&nbsp;</p>
                <p className={brindarALos}>
                       Fomentar el uso de nuestras plataformas digitales para
                  hacer transferencias entre estudiantes sin comisión, depósitos y
                  retiros en efectivo, ofreciendo herramientas tecnológicas
                  fáciles y seguras.
                </p>
                <p className={brindarALos}>&nbsp;</p>
                <p className={brindarALos}>
                       Promover la educación financiera de los estudiantes
                  universitarios, a través de charlas, talleres y capacitaciones
                  sobre temas como el ahorro, la inversión y el uso responsable
                  del crédito.
                </p>
                <p className={brindarALos}>&nbsp;</p>
                <p className={brindarALos}>
                        Establecer alianzas estratégicas con universidades y
                  empresas para ofrecer beneficios exclusivos a nuestros clientes,
                  tales como descuentos en matrículas, becas, prácticas laborales,
                  entre otros.
                </p>
                <p className={brindarALos}>&nbsp;</p>
                <p className={mantenerUnaCultura}>
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

<style jsx>{
            
.text {
  width: 0;
  height: 16px;
  position: relative;
  display: none;
}
.objetivo1,
.objetivo2Icon {
  height: 100px;
  width: 100px;
  position: relative;
}
.objetivo1 {
  display: none;
}
.objetivo2Icon {
  object-fit: cover;
  z-index: 2;
}
.objetivos1 {
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 100%;
  font-weight: 400;
  font-family: inherit;
  background: linear-gradient(#085f63, #085f63), #49beb7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.objetivosWrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xl) 0 0;
}
.objectiveContent,
.objectiveContentWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.objectiveContent {
  width: 318px;
  justify-content: flex-start;
  gap: var(--gap-sm);
}
.objectiveContentWrapper {
  width: 1668px;
  justify-content: center;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
}
.blankLine {
  margin: 0;
  font-size: var(--font-size-21xl);
  color: var(--color);
}
.brindarALos {
  margin: 0;
}
.mantenerUnaCultura {
  margin: 0;
  white-space: pre-wrap;
}
.brindarALosContainer {
  align-self: stretch;
  height: 675.1px;
  position: relative;
  line-height: 100%;
  display: inline-block;
  flex-shrink: 0;
  font-size: var(--font-size-17xl);
}
.frameGroup,
.frameWrapper {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}
.frameGroup {
  width: 1723px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 87.1px;
}
.frameWrapper {
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  padding: 0 var(--padding-xl) 0 var(--padding-2xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color-lightseagreen);
  font-family: var(--font-montserrat-alternates);
}
.frameParent,
.objetivos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frameParent {
  align-self: stretch;
  align-items: flex-end;
  gap: 36px;
  max-width: 100%;
}
.objetivos {
  width: 100%;
  position: relative;
  background-color: var(--background-default-default);
  overflow: hidden;
  align-items: flex-start;
  gap: 135.8px;
  line-height: normal;
  letter-spacing: normal;
}
@media screen and (max-width: 1000px) {
  .objetivos {
    gap: 68px;
  }
}
@media screen and (max-width: 975px) {
  .objetivos1 {
    font-size: var(--font-size-13xl);
    line-height: 32px;
  }
  .brindarALosContainer {
    font-size: var(--font-size-10xl);
    line-height: 32px;
  }
}
@media screen and (max-width: 725px) {
  .frameGroup {
    gap: 44px;
  }
  .frameParent {
    gap: var(--gap-lg);
  }
  .objetivos {
    gap: 34px;
  }
}
@media screen and (max-width: 450px) {
  .objetivos1 {
    font-size: var(--font-size-5xl);
    line-height: 24px;
  }
  .brindarALosContainer {
    font-size: var(--font-size-3xl);
    line-height: 24px;
  }
  .frameGroup {
    gap: var(--gap-3xl);
  }
  .objetivos {
    gap: 17px;
  }
}
}<style />
</div>
  );
};

export default Objetivos;*/