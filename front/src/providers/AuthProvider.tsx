/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useEffect, useState,useContext  } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ClientData } from "../pages/Register/validator";
import { ContactData } from "../components/Modals/ModallAdd/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
  register: (formData: ClientData) => void;
  user: ContactData | null ;
  update: (data: ClientData, id: number) => Promise<void>;
  get:(id:number)=> Promise<void>
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
      setLoading(false);
      navigate("dash");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (formData: ClientData) => {
    try {
      const response = await api.post('/client', formData);
      console.log(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1500);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const get = async (id:number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");
      const response = await api.get(`/client/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const update = async(data: ClientData, id: number)=>{
    try {
      const token = window.localStorage.getItem("your-todolist:token");

      const response = await api.put(`/contact/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, loading, register, user, update,get }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);