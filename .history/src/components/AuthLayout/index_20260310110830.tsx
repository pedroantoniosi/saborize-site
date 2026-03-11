import { Outlet } from "@tanstack/react-router";
import styles from "./index.module.css";

export default function AuthLayout() {
  return (
    <div className={styles.authContainer}>
      <div className={`${styles.authLeft} col`}>
        <img src="/src/assets/img/hamburger.png" alt="" />
        <div className="col  gap-1 mt-auto">
          <div className="row align-center gap-1">
            <i className="bi bi-fork-knife"></i>
            <h2>Entre e descubra os sabores que inspiram</h2>
          </div>
          <p>
            Compartilhe receitas, suas comidas favoritas e explore o que está
            bombando no mundo da gastronomia!
          </p>
        </div>
      </div>

      <div className={`${styles.authRight}`}>
        <Outlet />
      </div>
    </div>
  );
}
