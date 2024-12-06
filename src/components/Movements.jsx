import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPaginatedMovementsAPI } from '../services/movement/Movement.Service';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;

  @media (max-width: 624px) {
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 10px;
  }
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

  @media (max-width: 600px) {
    padding: 15px;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
    padding: 5px;
  }
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  text-align: left;
  overflow-x: auto;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

const TableHeader = styled.thead`
  background-color: #49beb7;

  th {
    padding: 12px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 600px) {
      padding: 10px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      padding: 8px;
      font-size: 12px;
    }

    @media (max-width: 400px) {
      padding: 7px;
      font-size: 11px;
    }

    @media (max-width: 320px) {
      padding: 6px;
      font-size: 10px;
    }
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

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 10px;
  }

  @media (max-width: 400px) {
    padding: 5px;
    font-size: 9px;
  }

  @media (max-width: 320px) {
    padding: 4px;
    font-size: 8px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #085f63;
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 19px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #085f63;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat Alternates';
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #49beb7;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    padding: 5px 10px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const Movements = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); // Maximum of 5 movements per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await getPaginatedMovementsAPI(page, pageSize);
        setTransactions(response.data?.data || []);
        setTotalPages(Math.ceil(response.data?.total / pageSize) || 1);
      } catch (error) {
        console.error('Error fetching movements:', error);
        setError('Error al obtener los movimientos');
      }
    };

    fetchMovements();
  }, [page, pageSize]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <TableWrapper>
        <Title>Movimientos</Title>
        {error && <p>{error}</p>}
        <Table>
          <TableHeader>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Número de Cuenta</th>
              <th>Descripción</th>
            </tr>
          </TableHeader>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableData>{transaction.id}</TableData>
                  <TableData>{new Date(transaction.created_at).toLocaleDateString()}</TableData>
                  <TableData>{transaction.amount} $</TableData>
                  <TableData>{transaction.account_number}</TableData>
                  <TableData>{transaction.description}</TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan="5">No hay movimientos disponibles</TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default Movements;