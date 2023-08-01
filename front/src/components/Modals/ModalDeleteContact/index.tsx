import { Modal } from "../Modal"
import { Container } from "./styles";
interface ModalAddProps {
    toggleModal: () => void;

  }
export const ModalDeleteContact = ({toggleModal}:ModalAddProps)=>{
    return(
        <Modal toggleModal={toggleModal}>
            <Container>
            <h1>Tem certeza que quer exluir o contato?</h1>
            <button>Exluir</button>
            </Container>
        </Modal>

    )
}