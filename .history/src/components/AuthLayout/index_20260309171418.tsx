import { Outlet } from "@tanstack/react-router";
import styles from "./index.module.css";

export default function AuthLayout() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authLeft}>{/* imagens ou conteúdo visual */}</div>

      <div className={styles.authRight}>
        <Outlet />
      </div>
    </div>
  );
}
