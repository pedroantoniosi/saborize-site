import { Outlet } from "@tanstack/react-router";

export default function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="auth-left">{/* imagem */}</div>

      <div className="auth-right">
        <Outlet />
      </div>
    </div>
  );
}
