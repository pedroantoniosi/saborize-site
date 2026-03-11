import styles from "./index.module.css";
import Message from "../Message";

export default function Register() {
  return (
    <div className={`${styles.registerContainer} auth_form`}>
      <div className={`${styles.registerRight} auth_content`}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="text" />

          <label>Nome do Usuário:</label>
          <input type="text" />

          <label>Senha:</label>
          <input type="password" />

          <label>Confirme a senha:</label>
          <input type="password" />

          <div className={styles.dateRow}>
            <div>
              <label>Dia</label>
              <input type="number" />
            </div>

            <div>
              <label>Mês</label>
              <input type="number" />
            </div>

            <div>
              <label>Ano</label>
              <input type="number" />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
