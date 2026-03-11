import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-template">
      <div className="left"></div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
