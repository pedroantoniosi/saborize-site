import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import AuthLayout from "@/components/AuthLayout";
import Login from "@/components/Login";
import Register from "@/components/Register";
import ResetPassword from "./components/ResetPassword";

const rootRoute = createRootRoute();

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: AuthLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/register",
  component: Register,
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/reset-password",
  component: ResetPassword,
});

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([loginRoute, registerRoute, resetPasswordRoute]),
]);

export const router = createRouter({
  routeTree,
});
