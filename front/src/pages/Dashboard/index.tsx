import { useState, useEffect} from "react";
import { CardContact } from "../../components/Cards/CardContact";

import { Header } from "../../components/Header";
import { ContainerMain } from "./style";
import { api } from "../../services/api";
import { ProfileCard } from "../../components/Cards/CardProfile";



export interface IContact {

  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  registration_date: string;
}


export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    (async () => {
      const token = window.localStorage.getItem("your-todolist:token");
      const response = await api.get<IContact[]>("contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <ContainerMain>
        <ProfileCard setContacts={setContacts} />
        <div className="contacts-container">
          {contacts.map((contact) => (
            <CardContact key={contact.id} contact={contact} />
          ))}
        </div>
      </ContainerMain>
    </>
  );
};