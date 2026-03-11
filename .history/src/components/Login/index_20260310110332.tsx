import styles from "./index.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className="col text-center">
          <a href="">Não tem uma conta ainda?</a>
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

          <div className="col text-center mt-2">Esqueceu sua senha?</div>

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
