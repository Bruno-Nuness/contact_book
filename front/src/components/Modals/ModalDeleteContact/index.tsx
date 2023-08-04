
import { useAuth } from "../../../providers/AuthProvider";
import { Modal } from "../Modal"
import { Container } from "./styles";

interface ModalAddProps {
    toggleModal: () => void;
    contactId:number;
    name:string
  }

export const ModalDeleteContact = ({toggleModal, name,contactId}:ModalAddProps)=>{


    const { deleteContact } = useAuth();
    const submit= ()=> {
        toggleModal()
        window.location.reload();
        deleteContact(contactId)

        
    }
    return(
        <Modal toggleModal={toggleModal}>
            <Container>
            <h1>Tem certeza que quer exluir <span>{name} </span>  da sua lista de contatos?</h1>
            <button type="button" onClick={submit}>Exluir</button>
            </Container>
        </Modal>

    )
}