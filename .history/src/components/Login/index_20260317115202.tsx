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
        <form className={``}>
          <div className="col">
            <label>Email ou Nome de Usuário:</label>
            <input className="inputAuth" type="text" />
          </div>

          <div className="col">
            <label>Senha:</label>
            <input className="inputAuth" type="password" />
          </div>

          <Link to="/resetPassword" className="col text-center mt-2">
            Esqueceu sua senha?
          </Link>
        </form>
      </div>
    </div>
  );
}
