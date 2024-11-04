import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 var(--padding-2xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);
`;

const MissionVision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-24xl-7);
  width: 100%;
  max-width: 1400px;
   @media (max-width: 990px) {
    max-width: 80%; /* Reducir ancho en pantallas más pequeñas */
    padding-top: var(--padding-5xl);
  }
  @media (max-width: 768px) {
    max-width: 80%; /* Reducir ancho en pantallas más pequeñas */
    padding-top: var(--padding-5xl);
  }
    @media (max-width: 400px) {
    max-width: 60%; /* Reducir ancho en pantallas más pequeñas */
    padding-top: var(--padding-5xl);
  }
`;

const ObjectiveMission = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1800px;
  gap: var(--gap-sm);
  margin: 0 100px;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambiar a columna en pantallas más pequeñas */
    margin: 0;
  }
`;

const Objetivo2Icon = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 75px; /* Reducir tamaño del ícono en pantallas pequeñas */
    width: 75px;
  }
   @media (max-width: 400px) {
    height: 65px; /* Reducir tamaño del ícono en pantallas pequeñas */
    width: 65px;
  } 
`;

const Mision = styled.h3`
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
`;

const MisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: var(--padding-10xl);
  text-align: center;
  @media (max-width: 768px) {
  padding-top: var(--padding-5xl); /* Ajusta según sea necesario */
}
`;

const Somos = styled.p`
  margin: 30px 0;
  font-size: clamp(1.5rem, 2vw, 1.5rem);
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-lightseagreen);
  text-align: justify;
  max-width: 1350px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0px;
  }
`;

const ObjectiveMission1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
`;

const FrameParent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const FinancialOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-lightseagreen);
`;

const ContenidoQS = () => {
  return (
    <Content>
      <MissionVision>
        <ObjectiveMission>
          <MissionContainer>
            <Objetivo2Icon loading="lazy" alt="Ícono de misión" src="/objetivo-21@2x.png" />
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
            <Objetivo2Icon loading="lazy" alt="Ícono de visión" src="/frame-1@2x.png" />
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
