import React from "react";
import { Dispatch } from "react";
import { ContactData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { api } from "../../../services/api";
import { IContact } from "../../../pages/Dashboard";
import { Container } from "./styles";
import InputRegister from "../../Inputs";


interface ModalAddProps {
  toggleModal: () => void;
  setContact: Dispatch<React.SetStateAction<IContact[]>>;
}

export const ModalAddContact = ({ toggleModal, setContact }: ModalAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(schema)
  });

  const createContact = async (data: ContactData) => {
    try {
      const response = await api.post<IContact>("/contact", data);
      setContact((previousContact) => [response.data, ...previousContact]);
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Container>
        <h1>Adicionar novo contato</h1>
      <form onSubmit={handleSubmit(createContact)}>

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

        <button type="submit">Cadastrar</button>
      </form>
      </Container>
    </Modal>
  );
};