import styled from 'styled-components';
import HeaderComponent from "../components/HeaderComponent"; 
import Contenido from "../components/Contenido.js";
import Component from "../components/Component";

const QuienesSomosContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background-default-default);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 161px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1000px) {
    gap: 80px;
  }
  @media screen and (max-width: 725px) {
    gap: 40px;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;

const Text = styled.div`
  width: 0;
  height: 16px;
  position: relative;
  display: none;
`;

const Objetivo1 = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: none;
`;

const QuienesSomos = () => {
  return (
    <QuienesSomosContainer>
      <Text />
      <HeaderComponent
        onQuienesSomosTextClick={() => {}}
        onObjetivosTextClick={() => {}}
        onServiciosTextClick={() => {}}
        onContactoTextClick={() => {}}
        onAccesoTextClick={() => {}}
        onRegistroTextClick={() => {}}
      />
      <Objetivo1 />
      <Contenido />
      <Component
        propMarginTop="unset"
        propAlignSelf="stretch"
        propFlex="unset"
      />
    </QuienesSomosContainer>
  );
};

export default QuienesSomos;