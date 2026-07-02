import { Outlet } from "@tanstack/react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-svh">
      <div className="">
        <Outlet />
      </div>
      <div className="hidden lg:flex w-full h-svh overflow-hidden">
        <img
          src="/public/eating.png"
          alt="hamburger"
          fetchPriority="high"
          decoding="async"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
