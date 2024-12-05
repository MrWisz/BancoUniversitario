import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #49beb7; /* Borde verde y más grueso */
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-in-out;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.8rem;
  color: #085f63;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.2rem;
  color: #49beb7;
  margin-bottom: 5px;
  font-weight: 400; /* Letra más delgada */
  align-self: flex-start; /* Alineación a la izquierda */
`;

const Input = styled.input`
  font-family: "Montserrat Alternates", sans-serif;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  background-color: #085f63;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #49beb7;
  }
`;

const AddContactForm = () => {
  return (
    <ContactContainer>
      <Title>Añadir contacto</Title>
      <Subtitle>Número de cuenta</Subtitle>
      <Input type="text" placeholder="Número de cuenta" />
      <Subtitle>Nombre y apellido</Subtitle>
      <Input type="text" placeholder="Nombre y apellido" />
      <Button>Guardar</Button>
    </ContactContainer>
  );
};

export default AddContactForm;
