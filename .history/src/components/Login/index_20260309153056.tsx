import styles from "./index.module.css";

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerRight}>
        <div className={styles.logo}></div>
        <form className={styles.registerForm}>
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
