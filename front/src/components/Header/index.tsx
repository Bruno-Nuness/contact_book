import { HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import { ModalDeleteClient } from "../Modals/ModalDeleteClient";


export const Header = ()=>{
    const [isOpenModal,setIsOpenModal]= useState(false)
    const toggleModal = ()=>setIsOpenModal(!isOpenModal)
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('your-todolist:token')
        navigate("/")

    }
    return (
        <HeaderContainer>
            {
            isOpenModal && <ModalDeleteClient toggleModal={toggleModal}></ModalDeleteClient>
            }
            <h1>CONTACT BOOK</h1>
            <div className="configurations">

            <button className="delete-btn" type="button" onClick={toggleModal}>Delete my account</button>
            <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </HeaderContainer>
    )
}