import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMovementsAPI } from '../services/movement/Movement.Service';
import { setJWT } from '../utils/localStorage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;
`;

const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #085f63;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.thead`
  background-color: #49beb7;

  th {
    padding: 12px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e0f7fa;
  }
`;

const TableData = styled.td`
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;

  &.income {
    color: #28a745;
  }

  &.expense {
    color: #dc3545;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #085f63;
  font-weight: bold;
  font-size: 24px;
`;

const Movements = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await getMovementsAPI();
        setTransactions(response.data?.movements || []);
      } catch (error) {
        console.error('Error fetching movements:', error);
        setError('Error al obtener los movimientos');
      }
    };

    fetchMovements();
  }, []);

  return (
    <Container>
      <TableWrapper>
        <Title>Movimientos</Title>
        {error && <p>{error}</p>}
        <Table>
          <TableHeader>
            <tr>
              <th>Monto</th>
              <th>Número de Cuenta</th>
              <th>Descripción</th>
            </tr>
          </TableHeader>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableData>{transaction.amount}</TableData>
                  <TableData>{transaction.account_number}</TableData>
                  <TableData>{transaction.description}</TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan="3">No hay movimientos disponibles</TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default Movements;