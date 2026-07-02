import { createRootRoute } from "@tanstack/react-router";
import AuthLayout from "@/components/AuthLayout";

export const Route = createRootRoute({
  component: AuthLayout,
});
