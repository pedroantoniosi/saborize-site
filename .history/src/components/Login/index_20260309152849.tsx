import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Message from "../Message";

export default function Register() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerRight}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <label>Email ou Nome de Usuário:</label>
          <input type="text" />

          <label>Senha:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.dateRow}>
            <div>
              <label>Dia</label>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>

            <div>
              <label>Mês</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>

            <div>
              <label>Ano</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
