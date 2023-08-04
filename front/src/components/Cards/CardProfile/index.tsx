import React, { useState } from "react";
import { Dispatch } from "react";
import { Container } from "./styles";

import { IContact } from "../../../pages/Dashboard";
import { ModalAddContact } from "../../Modals/ModallAdd";
import { ModalUpdateClient } from "../../Modals/ModalUpdateClient";

interface ProfileCardProps {
  setContacts: Dispatch<React.SetStateAction<IContact[]>>;
  client: IContact | null;
}

export const ProfileCard = ({ setContacts, client }: ProfileCardProps) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const toggleUpdateModal = () => setIsOpenUpdateModal(!isOpenUpdateModal);
  const toggleAddModal = () => setIsOpenAddModal(!isOpenAddModal);

  const fullName = client?.full_name ?? "";
  const email = client?.email ?? "";
  const phone_number = client?.phone_number ?? "";
  const id = client?.id ?? "";
  const avatar = client?.avatar ?? "";
  

  return (
    <Container>
      {isOpenAddModal && (
        <ModalAddContact toggleModal={toggleAddModal} setContact={setContacts} />
      )}
      {isOpenUpdateModal && (
        <ModalUpdateClient toggleModal={toggleUpdateModal}  id={Number(id)} />
      )}
      {client && (
        <>
          <div className="profile-box">
            <img src={avatar} alt="imagem de perfil do Cliente" />
          </div>
          <div className="container-box">

          <div className="informations-box"> 
          <h1>{fullName}</h1>
          <h2 className="email"><i> {email}</i> </h2>
          <p>+ {phone_number}</p>

          </div>
          <button className="update-btn" onClick={toggleUpdateModal}>
            Atualizar perfil
          </button>
          <button className="new-btn" type="button" onClick={toggleAddModal}>
            Novo Contato
          </button>
          </div>
        </>
      )}
    </Container>
  );
};