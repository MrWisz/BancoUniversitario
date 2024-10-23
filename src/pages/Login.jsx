import styled from 'styled-components';
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import LoginForm from "../components/LoginForm";
import Component from "../components/Component";

const IniciaTuSesin = styled.b`
  width: 667px;
  position: relative;
  line-height: 100%;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-10xl);
    line-height: 29px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 22px;
  }
`;

const IniciaTuSesinWrapper = styled.div`
  width: 1975px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--padding-xl) 28px;
  box-sizing: border-box;
  max-width: 100%;
`;

const FrameParent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  gap: 71px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--color);
  font-family: var(--font-montserrat-alternates);
  @media screen and (max-width: 1300px) {
    gap: 35px;
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-lg);
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--background-default-default);
  overflow: hidden;
  align-items: flex-end;
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

const Login = () => {
  return (
    <LoginContainer>
      <FrameParent>
        <FrameComponent3 />
        <IniciaTuSesinWrapper>
          <IniciaTuSesin>Inicia tu sesión</IniciaTuSesin>
        </IniciaTuSesinWrapper>
        <FrameComponent4 />
      </FrameParent>
      <LoginForm />
      <Component
        propMarginTop="unset"
        propAlignSelf="stretch"
        propFlex="unset"
      />
    </LoginContainer>
  );
};

export default Login;