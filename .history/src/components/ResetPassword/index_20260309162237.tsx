import styles from "./index.module.css";

export default function ResetPassword() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className="col text-center">
          <a href="">Criar uma conta</a>
        </div>
        <form className={styles.loginForm}>
          <div className="col">
            <label>Digite seu email:</label>
            <input type="text" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
