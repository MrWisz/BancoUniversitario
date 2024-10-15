import LoginNavigation from "../components/LoginNavigation";
import RegistrationContent from "../components/RegistrationContent";
import Component from "../components/Component";
import styles from "./RegistroDeUsuarios.module.css";

const RegistroDeUsuarios = () => {
  return (
    <div className={styles.registroDeUsuarios}>
      <img
        className={styles.icons8AddUser801}
        loading="lazy"
        alt=""
        src="/icons8adduser80-1@2x.png"
      />
      <main className={styles.loginNavigationParent}>
        <LoginNavigation />
        <section className={styles.registrationContentWrapper}>
          <RegistrationContent />
        </section>
      </main>
      <Component
        propMarginTop="unset"
        propAlignSelf="stretch"
        propFlex="unset"
      />
    </div>
  );
};

export default RegistroDeUsuarios;
