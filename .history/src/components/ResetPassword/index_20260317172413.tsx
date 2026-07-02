import { Link } from "@tanstack/react-router";

export default function ResetPassword() {
  return (
    <div className={`authContainer`}>
      <div className={`authContent col gap-2`}>
        <div className={`authImg`}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className="col text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={`authForm h-100 col gap-1`}>
          <div className="col">
            <label>Digite seu email:</label>
            <input className="inputLogin" type="text" />
          </div>

          <button type="submit" className="btnPrimary">
            Continuar
          </button>

          <div className="col text-center">
            <Link to="/login">Lembrei minha senha</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
