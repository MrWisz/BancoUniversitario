import styled from 'styled-components';
import ComponenteMision from "../components/ComponenteMision";
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
      <ComponenteMision  
        logoNoBackground1="/logonobackground-1@2x.png"
        label="Sign in"
        hasIconStart={false}
        hasIconEnd={false}
        showButton
        propHeight2="unset"
        propBackgroundColor="#e3e3e3"
        propBorder="1px solid #767676"
        propPadding="var(--space-200)"
        propFlex="1"
        propAlignSelf="stretch"
        propMinHeight="16px"
        propAlignSelf1="stretch"
        propFontSize="16px"
        propColor="#1e1e1e"
        propFlex1="unset"
        propTextShadow="unset"
        propWidth="unset"
        propMinHeight1="16px"
        block
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