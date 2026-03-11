import { createRootRoute, Outlet } from "@tanstack/react-router";
import AuthLayout from "@/components/AuthLayout";
import { Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

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
