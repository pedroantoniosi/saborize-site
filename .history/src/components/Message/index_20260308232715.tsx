import { useEffect } from "react";
import styles from "./index.module.css";

type Props = {
  text: string;
  type: "success" | "error";
  onClose: () => void;
};

export default function Message({ text, type, onClose }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${styles.message} ${
        type === "success" ? styles.success : styles.error
      }`}
    >
      {text}
    </div>
  );
}
