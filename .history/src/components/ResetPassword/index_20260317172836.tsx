import { Link } from "@tanstack/react-router";

export default function ResetPassword() {
  return (
    <div className={`authContainer`}>
      <div className={`authContent col justify-center gap-2`}>
        <div className="text-center">
          <Link to="/register">Não tem uma conta ainda?</Link>
        </div>
        <form className={`authForm h-100 col justify-center gap-1`}>
          <div className="col">
            <label className="mb-05">Encontre sua conta</label>
            <input
              className="inputLogin"
              type="text"
              placeholder="Digite seu email"
            />
          </div>

          <button type="submit" className="btnPrimary">
            Continuar
          </button>
        </form>

        <div className="text-center">
          <Link to="/login">Lembrei minha senha</Link>
        </div>
      </div>
    </div>
  );
}
