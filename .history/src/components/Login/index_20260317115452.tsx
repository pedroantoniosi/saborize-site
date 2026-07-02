import { Link } from "@tanstack/react-router";
import logoImg from "../../assets/img/logo.webp";

export default function Login() {
  return (
    <div className={`authContainer`}>
      <div className={`authContent`}>
        <div className={``}>
          <img src={logoImg} alt="Logo" fetchPriority="high" decoding="async" />
        </div>
        <div className="col text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={`col gap-1`}>
          <div className="col">
            <span className="mb-1">Email ou Nome de Usuário:</span>
            <input
              className="inputAuth"
              type="text"
              placeholder="Email ou nome do usuário"
            />
          </div>

          <div className="col">
            <input
              className="inputAuth"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <Link to="/resetPassword" className="col text-center mt-2">
            Esqueceu sua senha?
          </Link>
        </form>
      </div>
    </div>
  );
}
