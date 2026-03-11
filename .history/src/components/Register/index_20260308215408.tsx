import React from "react";
import styles from "./index.module.css";

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      {/* LADO DIREITO */}
      <div className={styles.registerRight}>
        <form className={styles.registerForm}>
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
              <input type="text" />
            </div>

            <div>
              <label>Mês</label>
              <input type="text" />
            </div>

            <div>
              <label>Ano</label>
              <input type="text" />
            </div>
          </div>

          <p className={styles.terms}>
            As pessoas que usam nosso serviço podem ter carregado suas
            informações de contato no Saborize.
          </p>

          <p className={styles.terms}>
            Ao tocar em <span>Cadastrar</span>, você concorda em criar uma conta
            e em <span>Termos</span>, <span>Políticas de Privacidade</span> e{" "}
            <span>Política de Cookies</span>.
          </p>

          <button type="submit" className={styles.submitBtn}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
