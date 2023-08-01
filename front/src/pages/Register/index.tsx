import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/AuthProvider";
import { ClientData } from "./validator";
import { Container } from "./styles";
import InputRegister from "../../components/Inputs";
import { Link } from "react-router-dom";

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ClientData>();
  const { register: authRegister } = useAuth();

  const onSubmit = async (data: ClientData) => {
    try {
      await authRegister(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="container-register">
        <h1>CONTACT BOOK</h1>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputRegister
            id="full_name"
            label="Name:"
            type="text"
            placeholder="Digite seu nome"
            error={errors.full_name?.message}
            {...register("full_name", { required: "O nome é obrigatório" })}
          />
          <InputRegister
            id="phone_number"
            label="Phone:"
            type="text"
            placeholder="Numero para contato"
            error={errors.phone_number?.message}
            {...register("phone_number", { required: "O numero para contato é obrigatório" })}
          />
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
              Cadastrar
            </button>
          </div>
        </form>
        <p className="login-return">Já possuí cadastro? <Link to={'/'}>Voltar ao login</Link></p>
      </div>
    </Container>
  );
};