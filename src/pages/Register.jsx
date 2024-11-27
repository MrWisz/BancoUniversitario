import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.jsx';
import HeaderBanca from '../components/HeaderBanca.jsx';
import Footer from '../components/Footer.jsx';
import FrameComponent4 from '../components/FrameComponent4.jsx';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0; /* Elimina el padding */
  font-family: 'Montserrat Alternates';
  position: relative;
  box-sizing: border-box;
  margin: 0; /* Elimina el margen */
`;

const FrameParent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  gap: 71px;
  width: 100%; /* Asegura que ocupe el ancho completo */
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);
  margin-top: 80px;
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
      <HeaderBanca />
      <FrameParent>
        <RegisterForm />
        <FrameComponent4 />
      </FrameParent>
      <Footer />
    </RegisterContainer>
  );
};

export default Register;