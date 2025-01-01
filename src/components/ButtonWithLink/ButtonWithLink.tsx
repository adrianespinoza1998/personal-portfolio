import Link from "next/link";
import React from "react";
import styles from "@/components/ButtonWithLink/button-with-link-styles.module.css";

interface IProps {
  text: string;
  href: string;
  color?: "pink" | "purple" | "sky";
  variant?: "filled" | "outlined";
}

export const ButtonWithLink = ({
  text,
  href,
  color = "pink",
  variant = "filled",
}: IProps) => {
  return (
    <Link
      className={`${styles["base-filled"]} ${styles[`${color}-${variant}`]}`}
      href={href}
    >
      {text}
    </Link>
  );
};
