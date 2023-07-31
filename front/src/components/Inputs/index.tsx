import { forwardRef, InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputRegisterProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  placeholder?: string;
}

const InputRegister = forwardRef<HTMLInputElement, InputRegisterProps>(
  ({ label, id, type, error, placeholder, ...rest }, ref) => {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          {...rest}
        />
        {error ? <p> {error}</p> : null}
      </Container>
    );
  }
);

export default InputRegister;




