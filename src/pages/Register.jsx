import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.jsx';
import HeaderBanca from '../components/HeaderBanca.jsx';
import Footer from '../components/Footer.jsx';
import FrameComponent4 from '../components/FrameComponent4.jsx';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column; /* Cambiar a columna para apilar los elementos */
  justify-content: center;
  align-items: center;
  width: 100%; /* Ajusta para ocupar el ancho completo */
  padding: 20px;
  font-family: 'Montserrat Alternates';
  position: relative;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho
`;
const FrameParent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center; /* Cambiado a center */
  gap: 71px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);
  @media screen and (max-width: 1300px) {
    gap: 35px;
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-lg);
  }
`;  

const Register = () => {
  return (
    <RegisterContainer>
      <FrameParent>
        <HeaderBanca />
        <RegisterForm />
        <FrameComponent4 />
      </FrameParent>
      <Footer/>
    </RegisterContainer>
  );
};

export default Register;