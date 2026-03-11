import styles from "./index.module.css";

export default function Register() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <form className={styles.loginForm}>
          <label>Email ou Nome de Usuário:</label>
          <input type="text" />

          <label>Senha:</label>
          <input type="password" />

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
