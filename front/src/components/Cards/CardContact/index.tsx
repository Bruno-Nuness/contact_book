import {useState} from 'react'
import { Container } from "./styles";
import { IContact } from "../../../pages/Dashboard/index";
import { ModalUpdateContact } from '../../Modals/ModalUpdateContact';
import { ModalDeleteContact } from '../../Modals/ModalDeleteContact';



interface CardProps {
  contact: IContact;
  name:string
}

export const CardContact = ({ contact, name }: CardProps) => {
  const [isOpenModal, setIsOpenModal]=useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const toggleModal = ()=> setIsOpenModal(!isOpenModal)
  const toggleDeleteModal = ()=> setIsOpenDeleteModal(!isOpenDeleteModal)
  return (
    <Container key={contact.id}>
      
      {isOpenModal && <ModalUpdateContact toggleModal={toggleModal} contactId={contact.id} name={name} />}
      {isOpenDeleteModal && <ModalDeleteContact toggleModal={toggleDeleteModal} name={name} contactId={contact.id} />}
      <h1 className='title'>{contact.full_name}</h1>
      <p className='email'> {contact.email}</p>
      <p className='date'>{contact.registration_date}</p>
      <h2 className='contact'>+ {contact.phone_number}</h2>
      <div className='btn-box'>

      <button className='update-btn' type='button' onClick={toggleModal}>Atualizar</button>
      <button className='delete-btn'type='button' onClick={toggleDeleteModal}>Excluir</button>
      </div>
    </Container>
  );
};