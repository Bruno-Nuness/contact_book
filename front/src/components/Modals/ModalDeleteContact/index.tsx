
import { useAuth } from "../../../providers/AuthProvider";
import { Modal } from "../Modal"
import { Container } from "./styles";

interface ModalAddProps {
    toggleModal: () => void;
    contactId:number
  }

export const ModalDeleteContact = ({toggleModal, contactId}:ModalAddProps)=>{


    const { deleteClient } = useAuth();
    const submit= ()=> {
        toggleModal()
        deleteClient(contactId)

        
    }
    return(
        <Modal toggleModal={toggleModal}>
            <Container>
            <h1>Tem certeza que quer exluir o contato?</h1>
            <button type="button" onClick={submit}>Exluir</button>
            </Container>
        </Modal>

    )
}