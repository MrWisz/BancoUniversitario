import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-family: "Montserrat Alternates", sans-serif;
`;

const Button = styled.button`
  background-color: ${(props) => (props.cancel ? '#ccc' : '#085f63')};
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.cancel ? '#aaa' : '#49beb7')};
  }
`;

const DeleteConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <Overlay>
      <PopupContainer>
        <Message>¿Estás seguro que deseas eliminar este contacto?</Message>
        <Button onClick={onCancel} cancel>Cancelar</Button>
        <Button onClick={onConfirm}>Confirmar</Button>
      </PopupContainer>
    </Overlay>
  );
};

export default DeleteConfirmationPopup;