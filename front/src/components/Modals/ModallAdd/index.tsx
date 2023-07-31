import React from "react";
import { Dispatch } from "react";
import { ContactData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { api } from "../../../services/api";
import { IContact } from "../../../pages/Dashboard";


interface ModalAddProps {
  toggleModal: () => void;
  setContact: Dispatch<React.SetStateAction<IContact[]>>;
}

export const ModalAddContact = ({ toggleModal, setContact }: ModalAddProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(schema),
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
      <form onSubmit={handleSubmit(createContact)}>
        <label htmlFor="full_name">Nome:</label>
        <input type="text" id="full_name" {...register("full_name")} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="phone">Telefone:</label>
        <input type="number" id="phone" {...register("phone")} />
        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
};