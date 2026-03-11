import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Message from "../Message";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  day: number;
  month: number;
  year: number;
};

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem");
      setMessageType("error");
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

    try {
      const res = await fetch("http://localhost/saborize/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === "success") {
        setMessage("Usuário criado com sucesso");
        setMessageType("success");

        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setDay("");
        setMonth("");
        setYear("");
      } else {
        setMessage(result.message || "Erro ao cadastrar");
        setMessageType("error");
      }
    } catch {
      setMessage("Erro ao conectar com o servidor");
      setMessageType("error");
    }
  };

  return (
    <div className={`${styles.registerContainer} auth_form`}>
      <div className={`${styles.registerRight} auth_content`}>
        {message && messageType && (
          <Message
            text={message}
            type={messageType}
            onClose={() => setMessage("")}
          />
        )}
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className="col">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col">
            <label>Nome do Usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="col">
            <label>Confirme a senha:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

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

          <button type="submit" className={styles.btnSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
