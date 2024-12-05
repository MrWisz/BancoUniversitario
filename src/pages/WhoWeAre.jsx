import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import ContentWWA from "../components/ContentWWA"; 
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";



const WhoWeAre = () => {
  return (
    <div className="WhoWeArePage">
      <HeaderComponent />
      <div className="text" />
      <div className="objetivo1" />
      <div className="WhoWeAreContainer">
        <ContentWWA />
      </div>
      <BackToTop />
      <Footer />
      <style jsx>{`
        .text {
          width: 0;
          height: 16px;
          position: relative;
          display: none;
        }
        .objetivo1 {
          width: 100px;
          height: 100px;
          position: relative;
          display: none;
        }
        .WhoWeAreContainer {
          width: 100%;
          position: relative;
          background-color: var(--background-default-default);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center; /* Centrar el contenido horizontalmente */
          justify-content: flex-start;
          gap: 161px;
          line-height: normal;
          letter-spacing: normal;
          
        }
        @media screen and (max-width: 1000px) {
          .WhoWeAreContainer {
            gap: 80px;
          }
        }
        @media screen and (max-width: 725px) {
          .WhoWeAreContainer {
            gap: 40px;
          }
        }
        @media screen and (max-width: 450px) {
          .WhoWeAreContainer {
            gap: var(--gap-xl);
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;