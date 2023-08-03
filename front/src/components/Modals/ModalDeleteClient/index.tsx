import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { Modal } from "../Modal"
import { Container } from "./styles";
import jwt_decode from "jwt-decode";
interface ModalAddProps {
    toggleModal: () => void;

  }
  interface DecodedToken{
    sub:string;
  }
  
export const ModalDeleteClient = ({toggleModal}:ModalAddProps)=>{
    const {deleteClient}= useAuth()
    const navigate = useNavigate()
    const token = localStorage.getItem("your-todolist:token")
    const decoded:DecodedToken | null = token ? jwt_decode(token) : null;
    const id = decoded?.sub ?? "";
    const submit = () =>{
        deleteClient(Number(id))
        setTimeout(() => {
            navigate("/");
          }, 1500);

    }
    

    return(
        <Modal toggleModal={toggleModal}>
            <Container>
            <h1>Tem certeza que quer exluir sua conta?</h1>
            <button type="button" onClick={submit}>Exluir</button>
            </Container>
        </Modal>

    )
}