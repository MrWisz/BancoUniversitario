import styled from 'styled-components';
import FrameComponent4 from "../components/FrameComponent4";
import LoginForm from "../components/LoginForm";
import HeaderBanca from '../components/HeaderBanca';
import Footer from '../components/Footer';


const FrameParent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center; /* Cambiado a center */
  gap: 71px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-5xl);
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

const Login = () => {
    return (
        <LoginContainer>
            <FrameParent>
                <HeaderBanca />
                <LoginForm />
                <FrameComponent4 />
            </FrameParent>
            <Footer/>
        </LoginContainer>
        
    );
};

export default Login;