import { HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import { ModalDeleteClient } from "../Modals/ModalDeleteClient";
import {toast} from "react-toastify"


export const Header = ()=>{
    const [isOpenModal,setIsOpenModal]= useState(false)
    const toggleModal = ()=>setIsOpenModal(!isOpenModal)
    const navigate = useNavigate()
    const logout = ()=>{
        toast.success("Até mais! ;D ")
        localStorage.removeItem('your-todolist:token')
        setTimeout(() => {
            navigate("/");
          }, 1500);
    

    }
    return (
        <HeaderContainer>
            {
            isOpenModal && <ModalDeleteClient  toggleModal={toggleModal}></ModalDeleteClient>
            }
            <h1> <span className="contact"> CONTACT</span> <span className="book">BOOK</span></h1>
            <div className="configurations">

            <button className="delete-btn" type="button" onClick={toggleModal}>Delete my account</button>
            <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </HeaderContainer>
    )
}