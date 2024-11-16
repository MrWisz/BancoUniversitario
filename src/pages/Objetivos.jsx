import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ObjetivosContainer = styled.div`
  font-family: var(--font-montserrat-alternates);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-default-default);
  color: var(--color);
  min-height: 100vh;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const Header = styled(HeaderComponent)`
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 40%; /* Ocupa 40% del ancho del contenedor */
  padding: 20px;

  img {
    width: 100%;
    max-width: 400px; /* Aumenta el tamaño máximo de la imagen */
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Text = styled.p`
  flex-basis: 55%; /* Ocupa 55% del ancho del contenedor */
  font-size: 1.4rem; /* Aumenta el tamaño de fuente */
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
  margin-left:50px;
  margin-right:50px;
  color: #49beb7;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Ajusta el tamaño en pantallas pequeñas */
  }
`;

const ObjetivosTitle = styled.h3`
  font-size: 2.5rem;
  color: #085f63;
  background: linear-gradient(#085f63, #085f63), #49beb7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Objetivos = () => {
  return (
    <ObjetivosContainer>
      <Header
        onQuienesSomosTextClick={() => console.log('Quienes somos clicked')}
        onObjetivosTextClick={() => console.log('Objetivos clicked')}
        onServiciosTextClick={() => console.log('Servicios clicked')}
        onContactoTextClick={() => console.log('Contacto clicked')}
        onAccesoTextClick={() => console.log('Acceso clicked')}
        onRegistroTextClick={() => console.log('Registro clicked')}
      />

      <ObjetivosTitle>Objetivos</ObjetivosTitle>

      <Section>
        <ImageWrapper>
          <img loading="lazy" alt="Objetivo 1" src="/img-1.png" />
        </ImageWrapper>
        <Text>
          Brindar a los estudiantes universitarios un servicio eficiente y de calidad en 
          la gestión de sus recursos financieros, a través de nuestros canales digitales y
          nuestros puntos de atención presencial.
          Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes 
          sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.
          Promover la educación financiera de los estudiantes universitarios, a través de charlas,
          talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.
        </Text>
      </Section>

      <Section>
        <ImageWrapper>
          <img loading="lazy" alt="Objetivo 2" src="/img-o.jpg" />
        </ImageWrapper>
        <Text>
          Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a 
          nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.
          Mantener una cultura de innovación y mejora continua en nuestros procesos,
          productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y 
          del mercado.
        </Text>
      </Section>
      <BackToTop />
      <Footer />
      
    </ObjetivosContainer>
    
  );
};

export default Objetivos;
