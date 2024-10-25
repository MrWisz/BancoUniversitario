import React from 'react';
import styled from 'styled-components';

const Content =styled.section`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la pantalla */
  padding: 0 var(--padding-2xl) var(--padding-54xl) var(--padding-xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);`;
const Objetivo2Icon = styled.img`
 height: 100px;
  width: 100px;
  object-fit: cover;
  overflow: visible;
`;

const Mision = styled.h3`
 margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.4;
  font-weight: 400;
  font-family: inherit;
  text-align: center; 
  
`;

const MissionVision = styled.div`
  width: 1735px;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--gap-24xl-7);
  align-items: center;
  overflow: visible;
`;

const ObjectiveMission = styled.div`
  width: 1610px;
  justify-content: center;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
  width: 100%;
  overflow: visible;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 260px;
  justify-content: center;
  gap: var(--gap-sm);
  
`;

const MisionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10xl) 0 0;
  text-align:center;
`;

const Somos = styled.p`
 margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem); 
  line-height: 1.6; 
  font-weight: 500;
  font-family: inherit;
  color: var(--color-lightseagreen);
  text-align: justify; /
  width: 100%; 
  max-width: 1200px; 
  overflow-wrap: break-word; 
  white-space: normal; 
  padding: 20px; 
`;

const ObjectiveMission1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FrameParent = styled.div`
  width: 100px;
  justify-content: flex-start;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FinancialOption = styled.div`
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-xs);
  box-sizing: border-box;
  color: var(--color-lightseagreen);
`;

const ContenidoQS = () => {
  return (
    <Content> 
      <MissionVision>
        <ObjectiveMission>
          <MissionContainer>
            <Objetivo2Icon loading="lazy" alt="" src="/objetivo-21@2x.png" />
            <MisionWrapper>
              <Mision>Misión</Mision>
            </MisionWrapper>
          </MissionContainer>
        </ObjectiveMission>
        <Somos>
          Somos una institución financiera comprometida con los estudiantes
          universitarios, brindando soluciones financieras ágiles y eficientes.
          Nuestra misión es facilitar la gestión de sus recursos y contribuir al
          crecimiento económico y personal de nuestros clientes.
        </Somos>
        <ObjectiveMission1>
          <FrameParent>
            <img loading="lazy" alt="" src="/frame-1@2x.png" />
            <MisionWrapper>
              <Mision>Visión</Mision>
            </MisionWrapper>
          </FrameParent>
        </ObjectiveMission1>
        <FinancialOption>
          <Somos>
            Queremos ser la mejor opción financiera para estudiantes
            universitarios en el país. Deseamos ser reconocidos por nuestros
            servicios innovadores, la calidad de atención al cliente y nuestro
            compromiso con la educación y el desarrollo social.
          </Somos>
        </FinancialOption>
      </MissionVision>
    </Content>
  );
};

export default ContenidoQS;