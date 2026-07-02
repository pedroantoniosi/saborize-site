import { createRootRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/dashboard";
import AuthLayout from "@/components/AuthLayout";

export const Route = createRootRoute({
  component: AuthLayout,
  Dashboard,
});
