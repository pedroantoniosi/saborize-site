import { Link } from "@tanstack/react-router";
import styles from "./index.module.css";

export default function ResetPassword() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className="col text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={styles.loginForm}>
          <div className="col">
            <label>Digite seu email:</label>
            <input type="text" />
          </div>

          <button type="submit" className="btnPrimary">
            Cadastrar
          </button>
          <div className="col text-center">
            <Link to="/login">Lembrei minha senha</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
