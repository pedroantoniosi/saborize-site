import { useForm } from "react-hook-form";
import styles from "./index.module.css";

type FormData = {
  formEmail: string;
  formUsername: string;
  formPassword: string;
  formConfirmPassword: string;
  formDay: number;
  formMonth: number;
  formYear: number;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const formMonth = watch("formMonth");
  const formYear = watch("formYear");
  const formPassword = watch("formPassword");

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className={`${styles.registerContainer} auth_form`}>
      <div className={`${styles.registerRight} auth_content`}>
        <form
          className={`${styles.registerForm} col gap-4`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col">
            <label>Email:</label>
            <input
              type="text"
              {...register("email", {
                required: "Email é obrigatório",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="col">
            <label>Nome do Usuário:</label>
            <input
              type="text"
              {...register("username", {
                required: "Nome de usuário é obrigatório",
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className="col">
            <label>Senha:</label>
            <input
              type="password"
              {...register("password", {
                required: "Senha obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
              })}
            />

            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="col">
            <label>Confirme a senha:</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirme sua senha",
                validate: (value) =>
                  value === password || "As senhas não coincidem",
              })}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className={styles.dateRow}>
            <div>
              <label>Dia</label>

              <input
                type="number"
                {...register("day", {
                  valueAsNumber: true,
                  required: "Informe o dia",
                  validate: (value) => {
                    if (!month || !year) {
                      return "Informe mês e ano primeiro";
                    }

                    const maxDays = new Date(year, month, 0).getDate();

                    if (value < 1 || value > maxDays) {
                      return `Esse mês possui apenas ${maxDays} dias`;
                    }

                    return true;
                  },
                })}
              />

              {errors.day && <span>{errors.day.message}</span>}
            </div>

            <div>
              <label>Mês</label>
              <input
                type="number"
                {...register("month", {
                  valueAsNumber: true,
                  required: "Informe o mês",
                  min: {
                    value: 1,
                    message: "Mês inválido",
                  },
                  max: {
                    value: 12,
                    message: "Mês deve ser até 12",
                  },
                })}
              />

              {errors.month && <span>{errors.month.message}</span>}
            </div>

            <div>
              <label>Ano</label>
              <input
                type="number"
                {...register("year", {
                  valueAsNumber: true,
                  required: "Informe o ano",
                  validate: (value) => {
                    const currentYear = new Date().getFullYear();

                    if (value < 1930) {
                      return "Ano mínimo permitido é 1930";
                    }

                    if (currentYear - value < 18) {
                      return "Você precisa ter pelo menos 18 anos";
                    }

                    return true;
                  },
                })}
              />

              {errors.year && <span>{errors.year.message}</span>}
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
