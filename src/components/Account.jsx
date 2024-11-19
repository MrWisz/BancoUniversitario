import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: var(--font-montserrat-alternates);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
  color: #085f63;
  padding: 0px;
  margin-top: 0px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  gap: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px; /* Hazlo más ancho */
  margin-right: 1000px;

  label {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #085f63;
  
  }

  select {
    width: 100%;
    padding: 12px; /* Más grande horizontal y verticalmente */
    border: 1px solid #49beb7;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    color: #085f63;
    background-color: #fff;

    &:focus {
      outline: none;
      border-color: #085f63;
      box-shadow: 0px 0px 5px rgba(8, 95, 99, 0.5);
    }

    option {
      font-family: 'Montserrat Alternates', sans-serif;
    }
  }
`;


const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #49beb7;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  max-width: 300px;
`;

const AccountInfo = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .account-icon {
    width: 60px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain; /* Asegura que la imagen se ajuste al contenedor */
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-size: 1rem;
      color: #085f63;
    }

    .available {
      font-weight: bold;
      color: #49beb7;
    }

    .logo {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

const BalanceDetails = styled(Card)`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: center;
    color: #085f63;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    td {
      padding: 5px 10px;
      font-size: 0.9rem;
      text-align: right;
      color: #085f63;
    }

    td:first-child {
      text-align: left;
    }

    .total {
      font-weight: bold;
      color: #49beb7;
    }
  }
`;

const Account = () => {
  return (
    <Container>
      <Title>Detalles de la cuenta</Title>

      <Section>
        <SelectWrapper>
          <label htmlFor="cuenta">Consultas</label>
          <select id="cuenta">
            <option>Cuenta nro. ****1234</option>
            <option>Cuenta nro. ****5678</option>
          </select>
        </SelectWrapper>

        <CardsContainer>
          <AccountInfo>
            <div className="account-icon">
              <img src="banco-universitario-website-favicon-color.ico" alt="Logo Banco" />
            </div>
            <div className="details">
              <div className="logo">
                <img src="maestro.png" alt="Logo Maestro" />
              </div>
              <span>Cuenta nro. ****1234</span>
              <span className="available">Disponible: 00,00 $</span>
            </div>
          </AccountInfo>

          <BalanceDetails>
            <h4>Detalle de Saldos</h4>
            <table>
              <tbody>
                <tr>
                  <td>Diferido:</td>
                  <td>0,00</td>
                </tr>
                <tr>
                  <td>Bloqueado:</td>
                  <td>0,00</td>
                </tr>
                <tr>
                  <td className="total">Total:</td>
                  <td className="total">0,00</td>
                </tr>
              </tbody>
            </table>
          </BalanceDetails>
        </CardsContainer>

        <SelectWrapper>
          <label htmlFor="movimientos">Movimientos del mes de</label>
          <select id="movimientos">
            <option>Julio</option>
            <option>Agosto</option>
          </select>
        </SelectWrapper>
      </Section>
    </Container>
  );
};

export default Account;
