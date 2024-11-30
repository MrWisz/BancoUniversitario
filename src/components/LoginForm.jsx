import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginAPI } from '../services/user/User.Service';
import { setJWT } from '../utils/localStorage';
import { isValidEmail } from '../utils/formValidation';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px;
  font-family: 'Montserrat Alternates';
  position: relative;
  margin-top: 100px;
`;

const Form = styled.form`
  background-color: lightseagreen;
  border-radius: 15px;
  padding: 20px;
  width: 600px;
  max-width: 900px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-color: #085f63;
`;

const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  color: #ffffff;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 95%;
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
  background-color: lightseagreen;
  color: #ffffff;
  border: solid 2px;
  border-color: #085f63;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Montserrat Alternates', sans-serif;

  &:hover {
    background-color: #085f63;
    border: solid 2px;
    border-color: #085f63;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #085f63;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!isValidEmail(email)) {
      newErrors.email = 'Debe ser un correo válido';
    }
    if (!password) {
      newErrors.password = 'Campo requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loginValues = { email, password };
    console.log('Login values:', loginValues); // Log the request payload
    try {
      const response = await loginAPI(loginValues);
      console.log('API response:', response); // Log the API response
  
      if (response.data.errors && response.data.errors.length > 0) {
        console.log('API error:', response.data.errors);
        setApiError(response.data.errors.join(', '));
        return;
      }
  
      console.log('Response data:', response.data); // Log the response data
      const token = response.data.data.jwt;
      console.log('Token found:', token); // Log the token
      if (token) {
        setJWT(token);
        console.log('Token set, navigating to /home-user');
        navigate('/home-user'); // Navigate to the home-user route
      } else {
        console.log('Token not found in response');
        setApiError('Error al iniciar sesión: Token no encontrado');
      }
    } catch (error) {
      console.error('Login error:', error.response);
      setApiError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <Container>
      <Circle>
        <CircleImage src="/usuario.png" alt="Usuario" />
      </Circle>
      <Form onSubmit={handleSubmit}>
        <Title>Iniciar sesión</Title>
        <FormGroup>
          <Label htmlFor="email">Correo:</Label>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span>{errors.email}</span>}
          </InputWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contraseña:</Label>
          <InputWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ToggleButton onClick={togglePasswordVisibility}>
              <img src={showPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
            </ToggleButton>
            {errors.password && <span>{errors.password}</span>}
          </InputWrapper>
        </FormGroup>
        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        <Button type="submit">Ingresar</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;