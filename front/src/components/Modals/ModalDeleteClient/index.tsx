import { Modal } from "../Modal"
import { Container } from "./styles";
interface ModalAddProps {
    toggleModal: () => void;

  }
export const ModalDeleteClient = ({toggleModal}:ModalAddProps)=>{
    return(
        <Modal toggleModal={toggleModal}>
            <Container>
            <h1>Tem certeza que quer exluir sua conta?</h1>
            <button>Exluir</button>
            </Container>
        </Modal>

    )
}