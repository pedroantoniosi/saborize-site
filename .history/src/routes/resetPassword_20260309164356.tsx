import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/resetPassword")({
  component: Register,
});

function resetPassword() {
  return <div>Register form</div>;
}
