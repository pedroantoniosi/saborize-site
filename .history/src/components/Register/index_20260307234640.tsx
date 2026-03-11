import React from "react";

export default function register() {
  return (
    <div className="register-container">
      {/* LADO DIREITO */}
      <div className="register-right">
        <form className="register-form">
          <label>Email ou Conta do Usuário:</label>
          <input type="text" />

          <label>Nome do Usuário:</label>
          <input type="text" />

          <label>Senha:</label>
          <input type="password" />

          <label>Confirme a senha:</label>
          <input type="password" />

          <div className="date-row">
            <div>
              <label>Dia</label>
              <input type="text" />
            </div>

            <div>
              <label>Mês</label>
              <input type="text" />
            </div>

            <div>
              <label>Ano</label>
              <input type="text" />
            </div>
          </div>

          <p className="terms">
            As pessoas que usam nosso serviço podem ter carregado suas
            informações de contato no Saborize.
          </p>

          <p className="terms">
            Ao tocar em <span>Cadastrar</span>, você concorda em criar uma conta
            e em <span>Termos</span>, <span>Políticas de Privacidade</span>e{" "}
            <span>Política de Cookies</span>.
          </p>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
