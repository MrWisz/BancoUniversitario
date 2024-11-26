import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";


const Container = styled.div`
  font-family: "Montserrat Alternates";
  background-color: #ffffff;
  padding-top: 950px;
  padding-bottom: 200px;
  text-align: center;
  height: 100vh;
  width: 90%;
  position: relative;
  left:7%;
  
`;

const Title = styled.h1`
  color: #085f63;
  margin-bottom: 20px;
  padding: 40px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 4px solid #49beb7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  height: 466px;
  width: 486px;
  margin: 0 auto;
`;

const Details = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom:1px;
`;

const Label = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #085f63;
  padding-top: 5px;
`;

const Value = styled.span`
  color: #333;
`;

const Success = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SuccessText = styled.h3`
  color: #085f63;
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  padding-top: 8px;
  padding-bottom: 2px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  align-items: center;
  background-color: #085f63;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: "Montserrat Alternates";
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 auto;
  justify-content: center;
  width: 180px;
  height: 70px;
  padding-top: 2px;

  &:hover {
    background-color: #49beb7;
  }
`;

function SuccessfullTransfer() {
  return (
    <Container>
      <Title>Transferencias</Title>
      <Card>
        <Details>
          <DetailItem>
            <Label>Número de Cuenta</Label>
            <Value>54321098765432109876</Value>
          </DetailItem>
          <DetailItem>
            <Label>Total</Label>
            <Value>250.00 Bs</Value>
          </DetailItem>
          <DetailItem>
            <Label>Descripción</Label>
            <Value>Pago Tequeños y malta</Value>
          </DetailItem>
        </Details>
        <Success>
          <AiFillCheckCircle style={{ fontSize: "80px", color: "#085F63", paddingTop: "2px" }} />
          <SuccessText>Transferencia exitosa</SuccessText>
        </Success>
        <Buttons>
          <Button>Agregar a contactos</Button>
          <Button>Continuar</Button>
        </Buttons>
      </Card>
    </Container>
  );
}

export default SuccessfulTransfer;