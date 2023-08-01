import React, { useState } from "react";
import { Dispatch } from "react";
import { Container } from "./styles";
import Profile from "../../../assets/img/perfil.png";
import { IContact } from "../../../pages/Dashboard";
import { ModalAddContact } from "../../Modals/ModallAdd";
import { ModalUpdateClient } from "../../Modals/ModalUpdateClient";

interface ProfileCardProps {
  setContacts: Dispatch<React.SetStateAction<IContact[]>>;
}

export const ProfileCard = ({ setContacts }: ProfileCardProps) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const toggleUpdateModal = () => setIsOpenUpdateModal(!isOpenUpdateModal);
  const toggleAddModal = () => setIsOpenAddModal(!isOpenAddModal);

  return (
    <Container>
      {isOpenAddModal && (
        <ModalAddContact toggleModal={toggleAddModal} setContact={setContacts} />
      )}
      {isOpenUpdateModal && (
        <ModalUpdateClient toggleModal={toggleUpdateModal} />
      )}
      <div className="profile-box">
        <img src={Profile} alt="imagem de perfil do Cliente" />
      </div>
      <h1>Nome do cliente</h1>
      <h2>cliente@mail.com</h2>
      <button className="update-btn" onClick={toggleUpdateModal}>
        Atualizar perfil
      </button>
      <button className="new-btn" type="button" onClick={toggleAddModal}>
        Novo Contato
      </button>
    </Container>
  );
};