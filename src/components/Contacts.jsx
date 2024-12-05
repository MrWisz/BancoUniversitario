import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getContactsListAPI } from '../services/contacts/Contacts.Service';

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
    padding: 18px; /* Aumenta el padding para hacer las filas más anchas */
    color: #ffffff;
    font-size: 22px; /* Aumenta el tamaño de la fuente */
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
  padding: 16px; /* Aumenta el padding para hacer las filas más anchas */
  font-size: 20px; /* Aumenta el tamaño de la fuente */
  color: #333;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 32px; /* Aumenta el tamaño de los íconos */
  height: 32px; /* Aumenta el tamaño de los íconos */
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #085f63;
  font-weight: bold;
  font-size: 24px;
`;

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContactsListAPI();
        setContacts(response.data?.data || []);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setError('Error al obtener los contactos');
      }
    };

    fetchContacts();
  }, []);

  return (
    <Container>
      <TableWrapper>
        <Title>Contactos</Title>
        {error && <p>{error}</p>}
        <Table>
          <TableHeader>
            <tr>
              <th>Alias</th>
              <th>Descripción</th>
              <th>Número de Cuenta</th>
              <th>Acciones</th>
            </tr>
          </TableHeader>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <TableRow key={index}>
                  <TableData>{contact.alias}</TableData>
                  <TableData>{contact.description}</TableData>
                  <TableData>{contact.accountNumber}</TableData>
                  <TableData>
                    <IconWrapper>
                      <Icon src="/editar.png" alt="Editar" />
                      <Icon src="/basura.png" alt="Eliminar" />
                    </IconWrapper>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan="4">No hay contactos disponibles</TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default Contacts;