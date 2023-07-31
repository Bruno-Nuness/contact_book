import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
    )
}