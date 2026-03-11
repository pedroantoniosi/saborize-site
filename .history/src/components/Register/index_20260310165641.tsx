import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import Message from "../Message";

type FormData = {
  formEmail: string;
  formUsername: string;
  formPassword: string;
  formConfirmPassword: string;
  formDay: string;
  formMonth: string;
  formYear: string;
};

export default function Register() {
  /* React Hook Form */
  const {
    register,
    handleSubmit, // função do React Hook Form
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  /* estados apenas para mensagens */
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const password = watch("formPassword");

  /* fecha mensagem automaticamente */
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  /*
  ==========================
  FUNÇÃO DE ENVIO DO FORM
  ==========================
  Essa função recebe os dados já validados
  pelo React Hook Form
  */
  const onSubmit = async (data: FormData) => {
    if (data.formPassword !== data.formConfirmPassword) {
      setMessage("As senhas não coincidem");
      setMessageType("error");
      return;
    }

    const payload = {
      email: data.formEmail,
      username: data.formUsername,
      password: data.formPassword,
      day: data.formDay,
      month: data.formMonth,
      year: data.formYear,
    };

    try {
      const res = await fetch("http://localhost/saborize/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.status === "success") {
        setMessage("Usuário criado com sucesso");
        setMessageType("success");

        reset();
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

        {/* 
        handleSubmit = função do React Hook Form
        onSubmit = sua função personalizada
        */}
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div className="col">
            <label>Email:</label>
            <input
              type="text"
              {...register("formEmail", {
                required: "Email é obrigatório",
              })}
            />
            {errors.formEmail && <span>{errors.formEmail.message}</span>}
          </div>

          <div className="col">
            <label>Nome do Usuário:</label>
            <input
              type="text"
              {...register("formUsername", {
                required: "Nome de usuário é obrigatório",
              })}
            />
            {errors.formUsername && <span>{errors.formUsername.message}</span>}
          </div>

          <div className="col">
            <label>Senha:</label>
            <input
              type="password"
              {...register("formPassword", {
                required: "Senha obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
              })}
            />
            {errors.formPassword && <span>{errors.formPassword.message}</span>}
          </div>

          <div className="col">
            <label>Confirme a senha:</label>
            <input
              type="password"
              {...register("formConfirmPassword", {
                required: "Confirme sua senha",
                validate: (value) =>
                  value === password || "As senhas não coincidem",
              })}
            />
            {errors.formConfirmPassword && (
              <span>{errors.formConfirmPassword.message}</span>
            )}
          </div>

          <div className={styles.dateRow}>
            <div>
              <label>Dia</label>
              <input
                type="text"
                {...register("formDay", {
                  required: "Dia obrigatório",
                })}
              />
            </div>

            <div>
              <label>Mês</label>
              <input
                type="text"
                {...register("formMonth", {
                  required: "Mês obrigatório",
                })}
              />
            </div>

            <div>
              <label>Ano</label>
              <input
                type="text"
                {...register("formYear", {
                  required: "Ano obrigatório",
                })}
              />
            </div>
          </div>

          <div className="col">
            <p className="terms-text">
              As pessoas que usam nosso serviço podem ter carregado suas
              informações de contato no Saborize.
            </p>
            <p className="terms-text">
              Ao tocar em <strong>Cadastrar</strong>, você concorda em criar uma
              conta e em <a href="/terms">Termos</a>,{" "}
              <a href="/privacy">Políticas de Privacidade</a> e{" "}
              <a href="/cookies">Política de Cookies</a>.
            </p>
            <p className="terms-text">
              A <a href="/privacy">Políticas de Privacidade</a> descreve como
              podemos usar as informações que coletamos quando você cria uma
              conta. Por exemplo, usamos essas informações para fornecer,
              personalizar e melhorar nossos produtos, incluindo anúncios.
            </p>
          </div>

          <button type="submit" className="btnPrimary">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
