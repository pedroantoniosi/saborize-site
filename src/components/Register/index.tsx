import { useState, useEffect } from "react";
import { useForm, type RegisterOptions } from "react-hook-form";
import Message from "../Message";
import { Link } from "@tanstack/react-router";

interface InputProps {
  section: "account" | "birthdate";
  label: string;
  name: keyof FormData;
  type: string;
  placeholder: string;
  inputClassName: string;
  labelClassName: string;
  validation?: RegisterOptions<FormData>;
}

interface FormData {
  formEmail: string;
  formUsername: string;
  formPassword: string;
  formConfirmPassword: string;
  formDay: string;
  formMonth: string;
  formYear: string;
}

const inputClassName = "p-4 bg-neutral-900  rounded-lg w-full border-none";
const labelClassName = "font-semibold";

const inputs: InputProps[] = [
  {
    section: "account",
    label: "Email",
    name: "formEmail",
    type: "email",
    placeholder: "Digite seu e-mail",
    inputClassName,
    labelClassName,
    validation: {
      required: "Email é obrigatório",
    },
  },
  {
    section: "account",
    label: "Nome do Usuário",
    name: "formUsername",
    type: "text",
    placeholder: "Digite seu nome",
    inputClassName,
    labelClassName,
    validation: {
      required: "Nome de usuário é obrigatório",
    },
  },
  {
    section: "account",
    label: "Senha",
    name: "formPassword",
    type: "password",
    placeholder: "Digite sua senha",
    inputClassName,
    labelClassName,
    validation: {
      required: "Senha obrigatória",
      minLength: {
        value: 6,
        message: "A senha deve ter no mínimo 6 caracteres",
      },
    },
  },
  {
    section: "account",
    label: "Confirme a senha",
    name: "formConfirmPassword",
    type: "password",
    placeholder: "Confirme sua senha",
    inputClassName,
    labelClassName,
    validation: {
      required: "Confirme sua senha",
      validate: (value, values) =>
        value === values.formPassword || "As senhas não coincidem",
    },
  },
  {
    section: "birthdate",
    label: "Dia",
    name: "formDay",
    type: "number",
    placeholder: "DD",
    inputClassName,
    labelClassName,
    validation: {
      required: "Dia obrigatório",
    },
  },
  {
    section: "birthdate",
    label: "Mês",
    name: "formMonth",
    type: "number",
    placeholder: "MM",
    inputClassName,
    labelClassName,
    validation: {
      required: "Mês obrigatório",
    },
  },
  {
    section: "birthdate",
    label: "Ano",
    name: "formYear",
    type: "number",
    placeholder: "AAAA",
    inputClassName,
    labelClassName,
    validation: {
      required: "Ano obrigatório",
    },
  },
];

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  /* estados apenas para mensagens */
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

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
  Recebe os dados já validados pelo React Hook Form
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
      const res = await fetch(
        "https://saborize.infinityfreeapp.com/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

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

  const accountInputs = inputs.filter((input) => input.section === "account");

  const birthdateInputs = inputs.filter(
    (input) => input.section === "birthdate",
  );

  return (
    <div className="flex justify-center items-center  bg-black text-white  min-h-svh">
      {message && messageType && (
        <Message
          text={message}
          type={messageType}
          onClose={() => setMessage("")}
        />
      )}

      <form
        className="flex flex-col gap-4 p-4 max-w-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          {accountInputs.map((input) => (
            <div key={input.name} className="flex flex-col gap-2">
              <label className={input.labelClassName}>{input.label}</label>

              <input
                type={input.type}
                placeholder={input.placeholder}
                className={input.inputClassName}
                {...register(input.name, input.validation)}
              />

              {errors[input.name] && (
                <span className="text-sm text-red-500">
                  {errors[input.name]?.message}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex  gap-4">
          {birthdateInputs.map((input) => (
            <div key={input.name} className="flex flex-col gap-2">
              <label className={input.labelClassName}>{input.label}</label>

              <input
                type={input.type}
                placeholder={input.placeholder}
                className={input.inputClassName}
                {...register(input.name, input.validation)}
              />

              {errors[input.name] && (
                <span className="text-sm text-red-500">
                  {errors[input.name]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4  py-8">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full cursor-pointer"
          >
            Cadastrar
          </button>
          <Link to="/login" className="col text-center mt-2">
            Já tenho uma conta
          </Link>
        </div>
      </form>
    </div>
  );
}
