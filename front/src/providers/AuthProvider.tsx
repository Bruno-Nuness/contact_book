/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useEffect, useState,useContext  } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ClientData } from "../pages/Register/validator";
import { ContactData } from "../components/Modals/ModallAdd/validator";
import { ToastContainer, toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  register: (formData: ClientData) => void;
  user: ContactData | null ;
  updateClient: (data: FormData, id: number) => Promise<void>;
  deleteClient: ( id: number) => Promise<void>;
  updateContact: (data: FormData, id: number) => Promise<void>;
  deleteContact: ( id: number) => Promise<void>;
  get:()=> Promise<void>
}
interface FormData {
  full_name: string;
  email: string;
  phone_number: string;

}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<ContactData | null>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("your-todolist:token");
    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
 
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("your-todolist:token", token);

      setUser(response.data.user)
      toast.success("Bem vindo!")
      setLoading(false);
      navigate("dash");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (formData: ClientData) => {
    try {
      const response = await api.post('/client', formData);
  
      toast.success("Seja muito bem vindo!!")
      setTimeout(() => {
        navigate("/");
      }, 1500);
      setUser(response.data.user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error);
      toast(error.response.data)
    }
  };
  const get = async ()=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");
      const response = await api.get(`/client`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const updateContact = async(data: FormData, id: number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");

      const response = await api.patch(`/contact/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Contato atualizado!")

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const updateClient = async(data: FormData, id: number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");

      const response = await api.patch(`/client/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Client atualizado")
    
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteContact = async(id: number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");

      const response = await api.delete(`/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      toast("Contato deletado")
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteClient = async(id: number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");

      const response = await api.delete(`/client/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Conta excluida, esperamos que volte ;(")
   
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        
        theme="dark"
      />
    <AuthContext.Provider value={{ signIn, loading, register, user, updateClient,get ,deleteClient, updateContact, deleteContact}}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};
export const useAuth = () => useContext(AuthContext);