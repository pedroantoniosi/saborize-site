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
    <>
      {message && (
        <div
          className={`${styles.message} ${
            messageType === "success" ? styles.success : styles.error
          }`}
        >
          {message}
        </div>
      )}
    </>
  );
}
