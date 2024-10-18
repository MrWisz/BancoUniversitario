import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import LoginForm from "../components/LoginForm";
import Component from "../components/Component";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <section className={styles.frameParent}>
        <FrameComponent3 />
        <div className={styles.iniciaTuSesinWrapper}>
          <b className={styles.iniciaTuSesin}>Inicia tu sesión</b>
        </div>
        <FrameComponent4 />
      </section>
      <LoginForm />
      <Component
        propMarginTop="unset"
        propAlignSelf="stretch"
        propFlex="unset"
      />
    </div>
  );
};

export default Login;
