import HeaderComponent from "../components/HeaderComponent"; 
import PanelImageDouble from "../components/PanelImageDouble";
import CardGridIcon from "../components/CardGridIcon";
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="text" />
      <HeaderComponent />
      <section className="content">
        <PanelImageDouble image="/image@2x.png" image1="/image-1@2x.png" />
        <CardGridIcon />
      </section>
      <Footer/>
      <style jsx>{`
        .text {
          width: 0;
          height: 16px;
          position: relative;
          flex-shrink: 0;
          display: none;
        }
        .content,
        .landingPage {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
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