import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function AxiosTeste() {
  const [user, setUser] = useState();
  const [doc, setDoc] = useState();
  
  useEffect(() => {
    api
      .get("/documentos/1")
      .then((response) => setDoc(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  
  useEffect(() => {
      api
        .get("/usuarios/" + doc?.usu_id)
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
  }, []);

  return (
    <div className="AxiosTeste">
        <p>Texto do documento: {doc?.texto}</p>
        <p>Usuário: {user?.nome}</p>
        <p>Email: {user?.email}</p>
    </div>
  );
}
