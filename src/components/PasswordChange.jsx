import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
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
      margin-top:20px;
      padding: 5px;
      background-color: #FFFFFF;
      color: #085F63;
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
  padding-top:5px;
  pading-bottom:5px;
`;

const Input = styled.input`
  width: 414px;
  height: 20px;
  margin: 15px 24px 24px 28px;
  border-radius: 8px;
  border: 1px solid #49beb7;
  padding-bottom:20px;
  margin-top: 2px;
  margin-bottom:2px;
  padding-top: 8px;
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

  color:${(props)=>(props.success ? '#085f63':'red')};
`;
const ToggleButton = styled.button`
  position: absolute;
  right: 15px;
  top: 49.3%;
  transform: translateY(100px);
  transform: translateX(-570px);
  background: none;
  border: none;
  cursor: pointer;
`;
const ToggleButton1 = styled.button`
  position: absolute;
  right: 584px;
  top: 17.8%;
  transform: translateY(400px);

  background: none;
  border: none;
  cursor: pointer;
`;
const ToggleButton2 = styled.button`
  position: absolute;
  right: 584px;
  top: 74%;
  transform: translateY(100%);
  background: none;
  border: none;
  cursor: pointer;
`;

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const[ isSuccess,setIsSuccess]=useState(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Las contraseñas nuevas no coinciden.");
      setIsSuccess(null);
    } else {
      setMessage("¡Contraseña ha cambiado exitosamente!");
      setIsSuccess(true);
      // Aquí podrías enviar la nueva contraseña a un servidor
    }
  };

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    if (!oldPassword && !newPassword && !confirmPassword) {
      setMessage("");// Valida que al limpiar los input, se limpie el mensaje
    }
  }, [oldPassword, newPassword, confirmPassword]);

  return (
    <Container>
      <Main>
        <Title>Cambio de contraseña</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Ingrese la contraseña antigua:
            <Input
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
             
            />
            <ToggleButton onClick={toggleOldPasswordVisibility}>
              <img src={showOldPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
            </ToggleButton>
          </Label>
          <Label>
            Ingrese la contraseña nueva:
            <Input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              maxLength={20}
            />
            <ToggleButton1 onClick={toggleNewPasswordVisibility}>
              <img src={showNewPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
            </ToggleButton1>
          </Label>
          <Label>
            Confirme la contraseña nueva:
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              maxLength={20}
            />
            <ToggleButton2 onClick={toggleConfirmPasswordVisibility}>
              <img src={showConfirmPassword ?'/ojos-cruzados.png':'/ojo.png'} alt="Toggle visibility"/>
            </ToggleButton2>
          </Label>
          
          <Button type="submit">Confirmar</Button>
          {message && <Message success={isSuccess}>{message}</Message>}
        </Form>
      </Main>
    </Container>
  );
}

export default PasswordChange;
