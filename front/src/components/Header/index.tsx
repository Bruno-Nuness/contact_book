import { HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom";


export const Header = ()=>{
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('your-todolist:token')
        navigate("/")

    }
    return (
        <HeaderContainer>
            <h1>CONTACT BOOK</h1>
            <div className="configurations">

            <button className="delete-btn">Delete my account</button>
            <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </HeaderContainer>
    )
}