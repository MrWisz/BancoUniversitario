import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { updateContactAPI, getContactAPI } from '../services/contacts/Contacts.Service';
import { getJWT } from '../utils/localStorage';

const Container = styled.div`
  padding-top: 1vh;
  padding-bottom: 1vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #085f63;
`;

const Main = styled.main`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 4px solid #49beb7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2px;
  width: 486px;
  margin: 80px auto;
`;

const Title = styled.h1`
  font-family: 'Montserrat Alternates';
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 5px;
  background-color: #ffffff;
  color: #085f63;
  text-align: center;
  weight: 418px;
  height: 43px;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: center;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 24px;
  text-align: center;
  color: #085f63;
  font-family: "Montserrat Alternates";
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 414px;
  margin: 15px 24px 24px 28px;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #085f63;
  border-radius: 5px;
  border-color: #085f63;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
  color: #085f63;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #085f63;
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  border: 1px solid #085f63;
  border-radius: 5px;
  border-color: #085f63;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
  color: #085f63;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #085f63;
  }
`;

const Button = styled.button`
  text-align: center;
  width: 200px;
  height: 45px;
  background-color: #085f63;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
  font-family: "Montserrat Alternates";
  font-weight: bold;
  margin: 8px auto;

  &:hover {
    background-color: #49beb7;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #085f63;
  font-size: 22px;
  font-family: Montserrat Alternates;
  font-weight: normal;

  color: ${(props) => (props.success ? '#085f63' : 'red')};
`;

function ModifyContact({ contactId }) {
  const [alias, setAlias] = useState("");
  const [description, setDescription] = useState("");
  const [newAlias, setNewAlias] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [contactIdToUpdate, setContactIdToUpdate] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await getContactAPI(contactId);
        const { id, alias, description } = response.data.data; // Asegúrate de acceder correctamente a los datos
        setAlias(alias || ""); // Asegúrate de que alias no sea undefined
        setDescription(description || ""); // Asegúrate de que description no sea undefined
        setContactIdToUpdate(id); // Guarda el ID del contacto
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, [contactId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAlias || !newDescription) {
      setMessage("Todos los campos son obligatorios.");
      setIsSuccess(false);
      return;
    }

    const data = {
      alias: newAlias,
      description: newDescription,
    };

    const jwt = getJWT(); // Obtén el token JWT del almacenamiento local

    try {
      await updateContactAPI(contactIdToUpdate, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setMessage("¡Contacto modificado exitosamente!");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error al modificar el contacto:", error);
      setMessage("Hubo un error al modificar el contacto.");
      setIsSuccess(false);
    }
  };

  return (
    <Container>
      <Main>
        <Title>Modificar Contacto</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Alias Actual:
            <InputWrapper>
              <Input
                type="text"
                required
              />
            </InputWrapper>
          </Label>
          <Label>
            Nuevo Alias:
            <InputWrapper>
              <Input
                type="text"
                value={newAlias}
                onChange={(e) => setNewAlias(e.target.value)}
                required
              />
            </InputWrapper>
          </Label>
          <Label>
            Nueva Descripción:
            <InputWrapper>
              <Input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                required
              />
            </InputWrapper>
          </Label>
          <Button type="submit">Modificar</Button>
          {message && <Message success={isSuccess.toString()}>{message}</Message>}
        </Form>
      </Main>
    </Container>
  );
}

export default ModifyContact;