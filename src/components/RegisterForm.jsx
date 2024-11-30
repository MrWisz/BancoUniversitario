import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerAPI } from '../services/user/User.Service';
import { isValidEmail } from '../utils/formValidation';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px;
  font-family: 'Montserrat Alternates';
  position: relative;
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

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'Campo requerido';
    if (!lastName) newErrors.lastName = 'Campo requerido';
    if (!documentNumber) newErrors.documentNumber = 'Campo requerido';
    if (!isValidEmail(email)) newErrors.email = 'Debe ser un correo válido';
    if (!password) newErrors.password = 'Campo requerido';
    if (password.length > 16) newErrors.password = 'La contraseña no puede tener más de 16 caracteres';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    if (!birthDate) newErrors.birthDate = 'Campo requerido';
    if (!phoneNumber) newErrors.phoneNumber = 'Campo requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const registerValues = {
      first_name: firstName,
      last_name: lastName,
      document_number: documentNumber,
      birth_date: new Date(birthDate).toISOString(), // Ensure correct date format
      phone_number: phoneNumber,
      email,
      password,
    };
    console.log('Register values:', registerValues); // Log the request payload
    try {
      const response = await registerAPI(registerValues);
      console.log('API response:', response); // Log the API response
      if (response.status === 201) { // Check for status code 201 (Created)
        console.log('Registration successful, navigating to /login');
        navigate('/login'); // Navigate to the login route
      } else {
        setApiError(response.data.message || 'Error al registrar');
      }
    } catch (error) {
      console.error('Register error:', error.response);
      setApiError(error.response?.data?.message || 'Error al registrar');
    }
  };

  return (
    <Container>
      <Circle>
        <CircleImage src="/usuario.png" alt="Usuario" />
      </Circle>
      <Form onSubmit={handleSubmit}>
        <Title>Registrarse</Title>
        <FormGroup>
          <Label htmlFor="firstName">Nombre:</Label>
          <InputWrapper>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </InputWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Apellido:</Label>
          <InputWrapper>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </InputWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="documentNumber">Número de Documento:</Label>
          <InputWrapper>
            <Input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              required
            />
            {errors.documentNumber && <span>{errors.documentNumber}</span>}
          </InputWrapper>
        </FormGroup>
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
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirmar Contraseña:</Label>
          <InputWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <ToggleButton onClick={togglePasswordVisibility}>
              <img src={showPassword ? '/ojos-cruzados.png' : '/ojo.png'} alt="Toggle visibility" />
            </ToggleButton>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </InputWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="birthDate">Fecha de Nacimiento:</Label>
          <InputWrapper>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
            {errors.birthDate && <span>{errors.birthDate}</span>}
          </InputWrapper>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Teléfono:</Label>
          <InputWrapper>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </InputWrapper>
        </FormGroup>
        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        <Button type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;