import React from "react";
import styles from "./index.module.css";
import React, { useState } from "react";

const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("As senhas não coincidem");
    return;
  }

  const data = {
    email,
    username,
    password,
    day,
    month,
    year,
  };

  const res = await fetch("http://localhost/register.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log(result);

  if (result.status === "success") {
    alert("Usuário criado com sucesso");
  } else {
    alert(result.message);
  }
};

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
