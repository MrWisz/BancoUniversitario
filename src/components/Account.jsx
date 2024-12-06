import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getBalanceAPI } from "../services/balance/Balance.Service";
import { whoAmIAPI } from "../services/user/User.Service";

const Container = styled.div`
  font-family: var(--font-montserrat-alternates);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  background-color: #ffffff;
  color: #085f63;
  padding: 0px;
  margin-top: 0px;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Dos columnas: una estrecha para los selects, otra más amplia para las tarjetas */
  gap: 20px;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  align-items: flex-start; /* Alinea elementos al inicio verticalmente */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
  }

  @media (max-width: 600px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
    padding: 5px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinea el contenido a la izquierda */
  width: 100%;
  gap: 15px;

  label {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #085f63;

    @media (max-width: 600px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  }

  label1 {
    width: 100%;
    padding: 12px;
    border: 1px solid #49beb7;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Montserrat Alternates';
    color: #085f63;
    background-color: #fff;

    &:focus {
      outline: none;
      border-color: #085f63;
      box-shadow: 0px 0px 5px rgba(8, 95, 99, 0.5);
    }

    @media (max-width: 600px) {
      padding: 10px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 8px;
      font-size: 0.8rem;
    }

    @media (max-width: 320px) {
      padding: 6px;
      font-size: 0.7rem;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Asegura que las tarjetas estén centradas */
  width: 100%;
  gap: 20px;
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

  @media (max-width: 600px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
    padding: 8px;
  }
`;

const AccountInfo = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .account-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px; /* Asegura un tamaño controlado */
    height: auto;

    img {
      width: 80%;
      height: auto;
      object-fit: contain; /* Ajusta la imagen al contenedor */
      margin-bottom: 5px;
    }

    h4,
    span {
      text-align: center;
      font-size: 0.9rem; /* Reduce el tamaño del texto si es necesario */
      white-space: wrap; /* Evita que el texto se desborde */
      overflow: hidden; /* Oculta cualquier desbordamiento */
      max-width: 100%; /* Evita que exceda el ancho del contenedor */

      @media (max-width: 600px) {
        font-size: 0.8rem;
      }

      @media (max-width: 480px) {
        font-size: 0.7rem;
      }

      @media (max-width: 320px) {
        font-size: 0.6rem;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    align-items: flex-end; /* Opcional: Alinea el contenido al final */

    .logo {
      display: flex;
      justify-content: flex-end; /* Mueve el logo hacia la derecha */
      align-self: flex-end; /* Opcional: Asegura que el logo esté en el extremo derecho */
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .available {
      font-size: 1rem;
      font-weight: bold;
      color: #49beb7;
      text-align: right; /* Ajusta la alineación para claridad */

      @media (max-width: 600px) {
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }

      @media (max-width: 320px) {
        font-size: 0.7rem;
      }
    }
  }
`;

const AccountNumber = styled.h4`
  font-size: 1rem;
  color: #085f63;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%; /* Limita el ancho del texto */

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

const CopyButton = styled.button`
  max-width: 306px;
  max-height: 70px;
  padding: 5px 5px;
  background-color: #49beb7;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-montserrat-alternates);
  &:hover {
    background-color: #085f63;
  }

  &:active {
    background-color: #064f54;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 4px 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 3px 3px;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    padding: 2px 2px;
  }
`;

const Account = () => {
  const [balance, setBalance] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await getBalanceAPI();
        setBalance(response.data.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    const fetchAccountNumber = async () => {
      try {
        const response = await whoAmIAPI();
        setAccountNumber(response.data.data.account_number);
      } catch (error) {
        console.error('Error fetching account number:', error);
      }
    };

    fetchBalance();
    fetchAccountNumber();
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => alert("¡Número de cuenta copiado al portapapeles!"))
      .catch((err) => alert("Error al copiar el número de cuenta"));
  };

  const censoredAccountNumber = accountNumber ? `****${accountNumber.slice(-4)}` : '';

  return (
    <Container>
      <Title>Detalles de la cuenta</Title>

      <Section>
        <div>
          <SelectWrapper>
            <label htmlFor="cuenta">Cuenta nro:</label>
            <label1 id="cuenta">
              <option>{censoredAccountNumber}</option>
            </label1>
            <CopyButton onClick={handleCopy}>Copiar nro° de cuenta</CopyButton>
          </SelectWrapper>
        </div>

        <CardsContainer>
          <AccountInfo>
            <div className="account-icon">
              <img src="banco-universitario-website-favicon-color.ico" alt="Logo Banco" />
              <AccountNumber>Cuenta Nro.</AccountNumber>
              <span>{censoredAccountNumber}</span>
            </div>
            <div className="details">
              <div className="logo">
                <img src="maestro.png" alt="Logo Maestro" />
              </div>
              <span className="available">Disponible: {balance !== null && balance !== undefined ? balance.toFixed(2) : 'Cargando...'} $</span>
            </div>
          </AccountInfo>
        </CardsContainer>
      </Section>
    </Container>
  );
};

export default Account;