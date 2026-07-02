import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/Login";

export const Route = createFileRoute("/_auth/resetPassword")({
  component: Login,
});
