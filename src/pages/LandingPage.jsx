import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import PanelImageDouble from "../components/PanelImageDouble";
import CardGridIcon from "../components/CardGridIcon";
import FrameComponent1 from "../components/FrameComponent1";

const LandingPage = () => {
  const navigate = useNavigate();

  const onQuienesSomosTextClick = useCallback(() => {
    navigate("/quienes-somos");
  }, [navigate]);

  const onObjetivosTextClick = useCallback(() => {
    navigate("/objetivos");
  }, [navigate]);

  const onServiciosTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cardGridIcon']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactoTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component1Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccesoTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegistroTextClick = useCallback(() => {
    navigate("/registro-de-usuarios");
  }, [navigate]);

  return (
    <div className="landingPage">
      <div className="text" />
      <header className="headerParent">
        <Header
          block
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
        />
        <img
          className="logoNoBackground1Icon"
          loading="lazy"
          alt=""
          src="/logonobackground-1@2x.png"
        />
        <h2 className="quienesSomos" onClick={onQuienesSomosTextClick}>
          Quienes somos
        </h2>
        <h2 className="objetivos" onClick={onObjetivosTextClick}>
          Objetivos
        </h2>
        <h2 className="servicios" onClick={onServiciosTextClick}>
          Servicios
        </h2>
        <h2 className="contacto" onClick={onContactoTextClick}>
          Contacto
        </h2>
        <div className="menu">
          <div className="menuChild" />
          <h2 className="acceso" onClick={onAccesoTextClick}>
            Acceso
          </h2>
        </div>
        <div className="menu1">
          <div className="menuItem" />
          <h2 className="registro" onClick={onRegistroTextClick}>
            Registro
          </h2>
        </div>
      </header>
      <section className="content">
        <PanelImageDouble image="/image@2x.png" image1="/image-1@2x.png" />
        <CardGridIcon />
      </section>
      <FrameComponent1 />
      <style jsx>{`
        .text {
          width: 0;
          height: 16px;
          position: relative;
          flex-shrink: 0;
          display: none;
        }
        .logoNoBackground1Icon {
          height: 62px;
          width: 252px;
          position: absolute;
          margin: 0 !important;
          top: 8px;
          left: 10px;
          object-fit: scale-down;
          z-index: 1;
        }
        .quienesSomos {
          width: 219px;
          right: 878px;
          display: inline-block;
          mix-blend-mode: normal;
        }
        .contacto,
        .objetivos,
        .quienesSomos,
        .servicios {
          margin: 0 !important;
          position: absolute;
          bottom: 47px;
          font-size: 25px;
          line-height: 100%;
          font-weight: 400;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          z-index: 1;
        }
        .objetivos {
          right: 704px;
        }
        .contacto,
        .servicios {
          width: 129px;
          right: 530px;
          min-width: 129px;
        }
        .contacto {
          width: 130px;
          right: 355px;
        }
        .acceso,
        .menuChild {
          height: 32px;
          position: relative;
        }
        .menuChild {
          width: 103px;
          background-color: var(--color-lightseagreen);
          display: none;
        }
        .acceso {
          padding-top: 5px;
          margin: 0;
          flex: 1;
          font-size: 23px;
          line-height: 100%;
          font-weight: 400;
          font-family: inherit;
          display: inline-block;
          min-width: 102px;
          white-space: nowrap;
          cursor: pointer;
          z-index: 2;
        }
        .menu,
        .menuItem {
          position: absolute;
          background-color: var(--color-lightseagreen);
          z-index: 1;
        }
        .menu {
          width: 132px;
          margin: 0 !important;
          right: 206px;
          bottom: 47px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          color: var(--background-default-default);
          border-radius: 5px;
        }
        .menuItem {
          top: 0;
          left: 5px;
          width: 120px;
          height: 32px;
          border-radius: 5px;
        }
        .menu1,
        .registro {
          width: 130px;
          position: absolute;
        }
        .registro {
          padding-top: 5px;
          margin: 0;
          top: 0;
          left: 0;
          font-size: 23px;
          line-height: 100%;
          font-weight: 400;
          font-family: inherit;
          display: inline-block;
          height: 28px;
          white-space: nowrap;
          cursor: pointer;
          z-index: 2;
        }
        .menu1 {
          height: 32px;
          margin: 0 !important;
          right: 31px;
          bottom: 45px;
          color: var(--background-default-default);
        }
        .content,
        .headerParent,
        .landingPage {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .headerParent {
          align-self: stretch;
          height: 115px;
          flex-shrink: 0;
          flex-direction: row;
          padding: 0 0 var(--padding-base);
          box-sizing: border-box;
          position: relative;
          max-width: 100%;
          text-align: center;
          font-size: var(--font-size-9xl);
          color: var(--color-lightseagreen);
          font-family: var(--font-montserrat-alternates);
        }
        .content,
        .landingPage {
          flex-direction: column;
        }
        .content {
          align-self: stretch;
          max-width: 100%;
        }
        .landingPage {
          width: 100%;
          position: relative;
          background-color: var(--background-default-default);
          overflow-y: auto;
          line-height: normal;
          letter-spacing: normal;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;