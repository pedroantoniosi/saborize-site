import { useForm } from "react-hook-form";
import styles from "./index.module.css";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const day = watch("day");
  const month = watch("month");
  const year = watch("year");
  const password = watch("password");

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className={`${styles.registerContainer} auth_form`}>
      <div className={`${styles.registerRight} auth_content`}>
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
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
              <input type="number" {...register("day")} />
            </div>

            <div>
              <label>Mês</label>
              <input
                type="number"
                {...register("day", {
                  required: "Informe o dia",
                  validate: (value) => {
                    if (!month) return "Informe o mês primeiro";

                    const maxDays = {
                      1: 31,
                      2: 28,
                      3: 31,
                      4: 30,
                      5: 31,
                      6: 30,
                      7: 31,
                      8: 31,
                      9: 30,
                      10: 31,
                      11: 30,
                      12: 31,
                    };

                    if (value < 1) return "Dia inválido";

                    if (value > maxDays[month]) {
                      return `Esse mês só possui ${maxDays[month]} dias`;
                    }

                    return true;
                  },
                })}
              />

              {errors.day && <span>{errors.day.message}</span>}
            </div>

            <div>
              <label>Ano</label>
              <input
                type="number"
                {...register("year", {
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
