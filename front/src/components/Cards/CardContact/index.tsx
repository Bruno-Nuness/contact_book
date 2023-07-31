import {useState} from 'react'
import { Container } from "./styles";
import { IContact } from "../../../pages/Dashboard/index";
import { ModalUpdateContact } from '../../Modals/ModalUpdateContact';


interface CardProps {
  contact: IContact;
}

export const CardContact = ({ contact }: CardProps) => {
  const [isOpenModal, setIsOpenModal]=useState(false)
  const toggleModal = ()=> setIsOpenModal(!isOpenModal)
  return (
    <Container key={contact.id}>
        {
            isOpenModal && <ModalUpdateContact toggleModal={toggleModal}></ModalUpdateContact>
        }
      <h1 className='title'>{contact.full_name}</h1>
      <p className='email'> {contact.email}</p>
      <p className='date'>{contact.registration_date}</p>
      <h2 className='contact'>+ {contact.phone}</h2>
      <div className='btn-box'>

      <button className='update-btn' type='button' onClick={toggleModal}>Atualizar</button>
      <button className='delete-btn'>Excluir</button>
      </div>
    </Container>
  );
};