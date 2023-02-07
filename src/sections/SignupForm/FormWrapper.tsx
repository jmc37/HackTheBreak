import { ReactNode } from "react";
import styles from "../../styles/SignupForm.module.css";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className={styles.formBox}>
        {children}
      </div>
    </>
  );
}
