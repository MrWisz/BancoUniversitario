import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderBanca from '../components/HeaderBanca';
import Account from '../components/Account';
import Movements from '../components/Movements';
import Footer from '../components/Footer';
import PasswordChange from '../components/PasswordChange';

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

  const handlePasswordChangeClick = () => {
    setShowPasswordChange(true);
  };

  const handleSaldoClick = () => {
    setShowPasswordChange(false);
  };

  return (
    <HomeUserContainer>
      <HeaderBanca onPasswordChangeClick={handlePasswordChangeClick} onSaldoClick={handleSaldoClick} />
      {!showPasswordChange ? (
        <>
          <Account />
          <Movements />
        </>
      ) : (
        <PasswordChange />
      )}
      <Footer />
    </HomeUserContainer>
  );
};

export default HomeUser;