import { useForm, SubmitHandler } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import InputRegister from "../../components/Inputs";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(schema)
  });
  const { signIn } = useAuth();
  const submit: SubmitHandler<LoginData> = async (data) => {
    signIn(data);
  };
  return (
    <Container>
      <div className="container-login">
        <h1>CONTACT BOOK</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <InputRegister
            id="email"
            label="Email:"
            type="email"
            placeholder="Digite seu email"
            error={errors.email?.message}
            {...register("email", { required: "O email é obrigatório" })}
          />
          <InputRegister
            id="password"
            label="Password:"
            type="password"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            {...register("password", { required: "Senha obrigatória" })}
          />
          <div className="btn-box">
            <button className="enter-btn" type="submit">
              Entrar
            </button>
          </div>
        </form>
        <p>Ainda não tem conta? <Link to={"/register"}>Cadastre-se aqui</Link></p>
      </div>
    </Container>
  );
};