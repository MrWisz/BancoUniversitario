import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { createContactAPI } from "../services/contacts/Contacts.Service";

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
  border: 2px solid #49beb7;
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
  font-weight: 400;
  align-self: flex-start;
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
  margin: 0 auto;

  &:hover {
    background-color: #49beb7;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AddContactForm = ({ onSuccess }) => {
  const [alias, setAlias] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      alias,
      account_number: accountNumber,
      description,
    };
    try {
      await createContactAPI(data);
      alert("Contacto creado exitosamente");
      // Limpiar el formulario
      setAlias("");
      setAccountNumber("");
      setDescription("");
      onSuccess(); // Llama a la función de callback
    } catch (error) {
      console.error("Error al crear el contacto:", error);
      alert("Hubo un error al crear el contacto");
    }
  };

  return (
    <ContactContainer>
      <Title>Añadir contacto</Title>
      <Form onSubmit={handleSubmit}>
        <Subtitle>Alias</Subtitle>
        <Input
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
        <Subtitle>Número de cuenta</Subtitle>
        <Input
          type="text"
          placeholder="Número de cuenta"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <Subtitle>Descripción</Subtitle>
        <Input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Guardar</Button>
      </Form>
    </ContactContainer>
  );
};

export default AddContactForm;