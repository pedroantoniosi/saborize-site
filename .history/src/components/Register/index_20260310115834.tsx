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
    formState: { errors },
  } = useForm<FormData>();

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
          </div>

          <div className="col">
            <label>Nome do Usuário:</label>
            <input
              type="text"
              {...register("username", {
                required: "Nome de usuário é obrigatório",
              })}
            />
          </div>

          <div className="col">
            <label>Senha:</label>
            <input type="password" {...register("password")} />
          </div>

          <label>Confirme a senha:</label>
          <input type="password" {...register("confirmPassword")} />

          <div className={styles.dateRow}>
            <div>
              <label>Dia</label>
              <input type="number" {...register("day")} />
            </div>

            <div>
              <label>Mês</label>
              <input type="number" {...register("month")} />
            </div>

            <div>
              <label>Ano</label>
              <input type="number" {...register("year")} />
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
