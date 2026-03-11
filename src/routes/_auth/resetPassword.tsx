import { createFileRoute } from "@tanstack/react-router";
import ResetPassword from "@/components/ResetPassword";

export const Route = createFileRoute("/_auth/resetPassword")({
  component: ResetPassword,
});
