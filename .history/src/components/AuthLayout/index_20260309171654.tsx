import { Outlet } from "@tanstack/react-router";
import styles from "./index.module.css";

export default function AuthLayout() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authLeft}>
        <div className="row">
          <i className="bi bi-fork-knife"></i>
        </div>
      </div>

      <div className={styles.authRight}>
        <Outlet />
      </div>
    </div>
  );
}
