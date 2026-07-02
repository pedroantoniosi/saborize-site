import { Link } from "@tanstack/react-router";
import logoImg from "../../assets/img/logo.webp";
import styles from "./index.module.css";

export default function Login() {
  return (
    <div className={`authContainer`}>
      <div className={`authContent col justify-center gap-2`}>
        <div className={``}>
          <img src={logoImg} alt="Logo" fetchPriority="high" decoding="async" />
        </div>
        <div className="text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>

        <form className={`col gap-1`}>
          <label>Entre no Saborize</label>
          <input
            className="inputLogin"
            type="text"
            placeholder="Email ou nome do usuário"
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit" className="btnPrimary">
            Entrar
          </button>
        </form>
        <div className="text-center mt-2">
          <Link to="/resetPassword">Esqueceu sua senha?</Link>
        </div>
      </div>
    </div>
  );
}
