import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "../Modal";
import InputRegister from "../../Inputs";
import { Container } from "./styles";

interface FormData {
  full_name: string;
  email: string;
  phone: string;
}

interface ModalUpdateContactProps {
  toggleModal: () => void;
}

export const ModalUpdateClient = ({ toggleModal }: ModalUpdateContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data);
      toggleModal();
    };


  return (
    <Modal toggleModal={toggleModal}>
      <Container>
        <h1>Atualização do Client</h1>
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
          id="email"
          label="Email:"
          type="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          {...register("email", { required: "O email é obrigatório" })}
        />
        <InputRegister
          id="phone"
          label="Phone:"
          type="text"
          placeholder="Digite seu telefone"
          error={errors.phone?.message}
          {...register("phone", { required: "O telefone é obrigatório" })}
        />
        <button type="submit">Atualizar</button>
      </form>
      </Container>
    </Modal>
  );
};
