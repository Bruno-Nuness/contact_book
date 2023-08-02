import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "../Modal";
import InputRegister from "../../Inputs";
import { Container } from "./styles";
import { useAuth } from "../../../providers/AuthProvider";

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
}
interface ClientData {
  full_name: string;
  email: string;
  phone_number: string;

}
interface ModalUpdateContactProps {
  toggleModal: () => void;
  contactId: number
}

export const ModalUpdateContact = ({ toggleModal, contactId }: ModalUpdateContactProps) => {
  const { updateClient } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async(data) => {
    try {
      const { full_name, email, phone_number } = data;
      const updatedContactData: ClientData = {
        full_name,
        email,
        phone_number: phone_number,
   
      };
      await updateClient(updatedContactData, contactId);
   
      toggleModal();
   
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Modal toggleModal={toggleModal}>
      <Container>
      <h1>Atualização do Contact</h1>
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
          error={errors.phone_number?.message}
          {...register("phone_number", { required: "O telefone é obrigatório" })}
        />
        <button type="submit">Atualizar</button>
      </form>
      </Container>
    </Modal>
  );
};
