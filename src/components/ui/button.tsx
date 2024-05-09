import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={
        props.primary ? styles.primary : props.secondary ? styles.secondary : ""
      }
    >
      {props.children}
    </button>
  );
}
