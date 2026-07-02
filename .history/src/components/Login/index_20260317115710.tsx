import { Link } from "@tanstack/react-router";
import logoImg from "../../assets/img/logo.webp";

export default function Login() {
  return (
    <div className={`authContainer`}>
      <div className={`authContent col  gap-2`}>
        <div className={``}>
          <img src={logoImg} alt="Logo" fetchPriority="high" decoding="async" />
        </div>
        <div className="col text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={`col gap-1`}>
          <span className="mb-1">Entre no Saborize</span>
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

          <Link to="/resetPassword" className="col text-center mt-2">
            Esqueceu sua senha?
          </Link>
        </form>
      </div>
    </div>
  );
}
