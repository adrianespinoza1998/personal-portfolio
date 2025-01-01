import { ReactNode } from "react";
import styles from "@/components/Container/container-styles.module.css";

interface IProps {
  children: ReactNode;
  color?: "pink" | "purple" | "sky";
  variant?: "filled" | "outlined";
  classes?: string;
}

export const Container = ({
  children,
  color = "pink",
  variant = "filled",
  classes,
}: IProps) => {
  return (
    <div
      className={`${styles["base-filled"]} ${
        styles[`${color}-${variant}`]
      } ${classes}`}
    >
      {children}
    </div>
  );
};
