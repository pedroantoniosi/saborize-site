import styles from "./index.module.css";
import { Link } from "@tanstack/react-router";

export default function Login() {
  return (
    <div className={`${styles.loginContainer} auth_form`}>
      <div className={`${styles.loginContent} auth_content`}>
        <div className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className="col text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={styles.loginForm}>
          <div className="col">
            <label>Email ou Nome de Usuário:</label>
            <input type="text" />
          </div>

          <div className="col">
            <label>Senha:</label>
            <input type="password" />
          </div>

          <Link to="/resetPassword" className="col text-center mt-2">
            Esqueceu sua senha?
          </Link>

          <button type="submit" className="btnPrimary">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
