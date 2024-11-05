import React from 'react';
import HeaderComponent from "../components/HeaderComponent"; 
import ContenidoQS from "../components/ContenidoQS"; 
import Footer from "../components/Footer";

const QuienesSomos = () => {
  return (
    <div className="quienesSomosPage">
      <HeaderComponent />
      <div className="text" />
      <div className="objetivo1" />
      <div className="quienesSomosContainer">
        <ContenidoQS />
      </div>
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
        .quienesSomosContainer {
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
          .quienesSomosContainer {
            gap: 80px;
          }
        }
        @media screen and (max-width: 725px) {
          .quienesSomosContainer {
            gap: 40px;
          }
        }
        @media screen and (max-width: 450px) {
          .quienesSomosContainer {
            gap: var(--gap-xl);
          }
        }
      `}</style>
    </div>
  );
};

export default QuienesSomos;