import React, { useState } from "react";
import { Dispatch } from "react";
import { Container } from "./styles";
import Profile from "../../../assets/img/perfil.png";
import { IContact } from "../../../pages/Dashboard";
import { ModalAddContact } from "../../Modals/ModallAdd";


interface ProfileCardProps {
  setContacts: Dispatch<React.SetStateAction<IContact[]>>;
}



export const ProfileCard = ({ setContacts }: ProfileCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <Container>
      {isOpenModal && (
        <ModalAddContact toggleModal={toggleModal} setContact={setContacts} />
      )}
      <div className="profile-box">
        <img src={Profile} alt="imagem de perfil do Cliente" />
      </div>
      <h1>Nome do cliente</h1>
      <h2>cliente@mail.com</h2>
      <button className="update-btn">
        Atualizar perfil
      </button>
      <button className="new-btn" type="button" onClick={toggleModal}>Novo Contato</button>
    </Container>
  );
};