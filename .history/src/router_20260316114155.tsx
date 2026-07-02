import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";

export function RootLayout() {
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const ResetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ResetPassword",
  component: ResetPassword,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  ResetPasswordRoute,
]);

export const router = createRouter({
  routeTree,
});
