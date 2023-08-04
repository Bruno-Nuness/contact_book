import { useState, useEffect} from "react";
import { CardContact } from "../../components/Cards/CardContact";
import jwt_decode from "jwt-decode";
import { Header } from "../../components/Header";
import { ContainerMain } from "./style";
import { api } from "../../services/api";
import { ProfileCard } from "../../components/Cards/CardProfile";
import { NotContacts } from "../../components/notContacts";

interface DecodedToken{
  sub:string;
}

export interface IContact {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  avatar:string;
  registration_date: string;
}


export const Dashboard = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [client, setClient] = useState<IContact | null>(null);
  const token = localStorage.getItem("your-todolist:token")
  const decoded:DecodedToken | null = token ? jwt_decode(token) : null;
  const id = decoded?.sub ?? "";

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
  useEffect(() => {
    if (id) {
      (async () => {
        const token = window.localStorage.getItem("your-todolist:token");
        const responseClient = await api.get<IContact>(`client/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClient(responseClient.data);
      })();
    }
  }, [id]);

  return (
    <>
      <Header/>
      <ContainerMain>
        <ProfileCard setContacts={setContacts} client={client} />
        <div className="contacts-container">
        {contacts.length === 0 ? (
            <NotContacts />
          ) : (
            contacts.map((contact) => (
              <CardContact key={contact.id} contact={contact} name={contact.full_name} />
            ))
          )}
        </div>
      </ContainerMain>
    </>
  );
};