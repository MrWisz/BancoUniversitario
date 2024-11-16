import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;


const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px var(--padding-2xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);
  background-color: #f5f5f5;
  width: 100vw; /* Ancho completo */
  animation: ${fadeIn} 0.6s ease-in-out;
  
  
  @media (max-width: 768px) {
    padding: 60px var(--padding-xl);
  }

  @media (max-width: 480px) {
    padding: 40px var(--padding-lg);
  }
`;

const MissionVision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1400px; /* Mayor ancho en pantallas grandes */
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 0;
  flex-direction: row;

  &:nth-child(odd) {
    flex-direction: row-reverse; /* Alterna la posición de imagen y texto */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Icon = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 160px;
    width: 160px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 700px; /* Ancho del texto */

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: clamp(3rem, 3vw, 3rem);
  line-height: 1.4;
  font-weight: 600;
  color: #085f63;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  line-height: 1.8;
  color:#49beb7;
  text-align: justify; /* Justificado */
  margin: 0;
`;

const ContentWWA = () => {
  return (
    <Content>
      <MissionVision>
        <Section>
          <Icon loading="lazy" alt="Ícono de misión" src="/mision.jpg" />
          <ContentWrapper>
            <Title>Misión</Title>
            <Text>
              Somos una institución financiera comprometida con los estudiantes universitarios,
              brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar
              la gestión de sus recursos y contribuir al crecimiento económico y personal de
              nuestros clientes.
            </Text>
          </ContentWrapper>
        </Section>
        <Section>
          <Icon loading="lazy" alt="Ícono de visión" src="/objective.jpg" />
          <ContentWrapper>
            <Title>Visión</Title>
            <Text>
              Queremos ser la mejor opción financiera para estudiantes universitarios en el país.
              Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención
              al cliente y nuestro compromiso con la educación y el desarrollo social.
            </Text>
          </ContentWrapper>
        </Section>
      </MissionVision>
    </Content>
  );
};

export default ContentWWA;
