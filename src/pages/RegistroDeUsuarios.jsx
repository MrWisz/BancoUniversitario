// import styled from 'styled-components';
// import LoginNavigation from "../components/LoginNavigation";
// import RegistrationContent from "../components/RegistrationContent";
// import Component from "../components/Component";

// const Icons8AddUser801 = styled.img`
//   width: 235px;
//   height: 217px;
//   position: absolute;
//   margin: 0 !important;
//   top: 477px;
//   left: 886px;
//   object-fit: cover;
//   z-index: 3;
// `;

// const RegistrationContentWrapper = styled.section`
//   align-self: stretch;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-end;
//   padding: 0 var(--padding-45xl) 0 68px;
//   box-sizing: border-box;
//   max-width: 100%;
//   @media screen and (max-width: 1050px) {
//     padding-left: 34px;
//     padding-right: var(--padding-13xl);
//   }
// `;

// const LoginNavigationParent = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-self: stretch;
//   align-items: flex-end;
//   gap: 95px;
//   max-width: 100%;
//   @media screen and (max-width: 1050px) {
//     gap: 47px;
//   }
//   @media screen and (max-width: 750px) {
//     gap: var(--gap-5xl);
//   }
// `;

// const RegistroDeUsuariosContainer = styled.div`
//   width: 100%;
//   position: relative;
//   background-color: var(--background-default-default);
//   overflow: hidden;
//   align-items: flex-start;
//   padding: var(--padding-5xs) 0 0;
//   box-sizing: border-box;
//   gap: 361px;
//   line-height: normal;
//   letter-spacing: normal;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   @media screen and (max-width: 1050px) {
//     gap: 180px;
//   }
//   @media screen and (max-width: 750px) {
//     gap: 90px;
//   }
//   @media screen and (max-width: 450px) {
//     gap: 45px;
//   }
// `;

// const RegistroDeUsuarios = () => {
//   return (
//     <RegistroDeUsuariosContainer>
//       <Icons8AddUser801
//         loading="lazy"
//         alt=""
//         src="/icons8adduser80-1@2x.png"
//       />
//       <LoginNavigationParent>
//         <LoginNavigation />
//         <RegistrationContentWrapper>
//           <RegistrationContent />
//         </RegistrationContentWrapper>
//       </LoginNavigationParent>
//       <Component
//         propMarginTop="unset"
//         propAlignSelf="stretch"
//         propFlex="unset"
//       />
//     </RegistroDeUsuariosContainer>
//   );
// };

// export default RegistroDeUsuarios;