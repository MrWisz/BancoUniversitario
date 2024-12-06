import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderBanca from '../components/HeaderBanca';
import Account from '../components/Account';
import Movements from '../components/Movements';
import Footer from '../components/Footer';
import PasswordChange from '../components/PasswordChange';
import Contacts from '../components/Contacts';
import AddContactForm from '../components/AddContactForm';
import ModifyContact from '../components/ModifyContact';
import TransferForm from '../components/TransferForm'; // Importa el componente TransferForm

const HomeUserContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background-default-default);
  overflow: hidden;
  align-items: center;
  gap: 75px;
  line-height: normal;
  letter-spacing: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 1300px) {
    gap: 37px;
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-lgi);
  }
`;

const HomeUser = () => {
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showAddContactForm, setShowAddContactForm] = useState(false);
  const [showModifyContact, setShowModifyContact] = useState(false);
  const [showTransferForm, setShowTransferForm] = useState(false); // Nuevo estado para TransferForm
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handlePasswordChangeClick = () => {
    setShowPasswordChange(true);
    setShowContacts(false);
    setShowAddContactForm(false);
    setShowModifyContact(false);
    setShowTransferForm(false);
  };

  const handleSaldoClick = () => {
    setShowPasswordChange(false);
    setShowContacts(false);
    setShowAddContactForm(false);
    setShowModifyContact(false);
    setShowTransferForm(false);
  };

  const handleContactsClick = () => {
    setShowContacts(true);
    setShowPasswordChange(false);
    setShowAddContactForm(false);
    setShowModifyContact(false);
    setShowTransferForm(false);
  };

  const handleAddContactClick = () => {
    setShowAddContactForm(true);
    setShowContacts(false);
    setShowPasswordChange(false);
    setShowModifyContact(false);
    setShowTransferForm(false);
  };

  const handleEditContactClick = (contactId) => {
    setSelectedContactId(contactId);
    setShowModifyContact(true);
    setShowContacts(false);
    setShowPasswordChange(false);
    setShowAddContactForm(false);
    setShowTransferForm(false);
  };

  const handleTransferGuestClick = () => {
    setShowTransferForm(true);
    setShowContacts(false);
    setShowPasswordChange(false);
    setShowAddContactForm(false);
    setShowModifyContact(false);
  };

  return (
    <HomeUserContainer>
      <HeaderBanca 
        onPasswordChangeClick={handlePasswordChangeClick} 
        onSaldoClick={handleSaldoClick} 
        onContactsClick={handleContactsClick} 
        onTransferGuestClick={handleTransferGuestClick} // Pasar la función de manejo de clics
      />
      {!showPasswordChange && !showContacts && !showAddContactForm && !showModifyContact && !showTransferForm ? (
        <>
          <Account />
          <Movements />
        </>
      ) : showContacts ? (
        <Contacts onEditContact={handleEditContactClick} />
      ) : showAddContactForm ? (
        <AddContactForm />
      ) : showModifyContact ? (
        <ModifyContact contactId={selectedContactId} />
      ) : showTransferForm ? (
        <TransferForm />
      ) : (
        <PasswordChange />
      )}
      <Footer />
    </HomeUserContainer>
  );
};

export default HomeUser;