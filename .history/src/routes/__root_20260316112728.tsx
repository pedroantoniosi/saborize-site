import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* aqui entram as páginas filhas */}
      <Outlet />
    </div>
  );
}
