import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { passwordAPI } from '../services/password/Password.Service';
import { hasFieldError } from '../utils/formValidation';

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

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
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

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPasswordError = hasFieldError(newPassword, [{ minLength: 8 }, { maxLength: 16 }]);
    const confirmPasswordError = hasFieldError(confirmPassword, [{ minLength: 8 }, { maxLength: 16 }]);

    if (newPasswordError || confirmPasswordError) {
      setMessage(newPasswordError || confirmPasswordError);
      setIsSuccess(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Las contraseñas nuevas no coinciden.");
      setIsSuccess(null);
      return;
    }

    try {
      // Guardar la nueva contraseña
      await passwordAPI({ oldPassword, newPassword });
      setMessage("¡Contraseña ha cambiado exitosamente!");
      setIsSuccess(true);
    } catch (error) {
      setMessage("Error al cambiar la contraseña.");
      setIsSuccess(false);
    }
  };

  const toggleOldPasswordVisibility = (e) => {
    e.preventDefault();
    setShowOldPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleNewPasswordVisibility = (e) => {
    e.preventDefault();
    setShowNewPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (!oldPassword && !newPassword && !confirmPassword) {
      setMessage(""); // Valida que al limpiar los input, se limpie el mensaje
    }
  }, [oldPassword, newPassword, confirmPassword]);

  return (
    <Container>
      <Main>
        <Title>Cambio de contraseña</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Ingrese la contraseña antigua:
            <InputWrapper>
              <Input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <ToggleButton onClick={toggleOldPasswordVisibility}>
                <img src={showOldPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
              </ToggleButton>
            </InputWrapper>
          </Label>
          <Label>
            Ingrese la contraseña nueva:
            <InputWrapper>
              <Input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                maxLength={16}
              />
              <ToggleButton onClick={toggleNewPasswordVisibility}>
                <img src={showNewPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
              </ToggleButton>
            </InputWrapper>
          </Label>
          <Label>
            Confirme la contraseña nueva:
            <InputWrapper>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                maxLength={16}
              />
              <ToggleButton onClick={toggleConfirmPasswordVisibility}>
                <img src={showConfirmPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
              </ToggleButton>
            </InputWrapper>
          </Label>
          <Button type="submit">Confirmar</Button>
          {message && <Message success={isSuccess}>{message}</Message>}
        </Form>
      </Main>
    </Container>
  );
}

export default PasswordChange;