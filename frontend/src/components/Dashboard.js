import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import newDocument from "../newDocument.png";
import imagem from "../imagem.jpg";
import "../css/Dashboard.css";
import api from "../services/api";

function List(id) {
  // export default function List(id) {
  //   const documentosUser = documentos.filter(user =>
  //     person.id === 'id'
  //   );
  //   const todosDocumentos = documentosUser.map(user =>
  //     <li>
  //       <card></card>
  //     </li>
  //   );
  //   return <ul>{todosDocumentos}</ul>;
  // }
  
  //const [docs, setDocs] = useState();
  // useEffect(() => {
  //   api
  //     .get(`/usuarios/${id}/documentos`)
  //     .then((response) => setDocs(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);
  // console.log(docs[0]);
  // const listItems = people.map((person) => (
  //   <li key={person.id}>
  //     <img src={getImageUrl(person)} alt={person.name} />
  //     <p>
  //       <b>{person.name}</b>
  //       {" " + person.profession + " "}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // ));
  // return <ul>{listItems}</ul>;



  // <Card style={{ width: "18rem" }}>
  //       <Card.Img variant="top" src={newDocument} />
  //     </Card>
  //     <Card style={{ width: "10rem" }}>
  //       <Card.Body>
  //         <Card.Img src={imagem} />
  //       </Card.Body>
  //     </Card>
}

function Grid() {
  const [token] = useState(localStorage.getItem('token'));
  const [docs, setDocs] = useState([]);
  const id = 4;
  
      useEffect(() => {
        api.get(`/usuarios/documentos`, {
              headers: { Authorization: `Bearer ${token}` },
            })
          .then((response) => {
            setDocs(response.data);
          })
          .catch((err) => {
            console.error("Ops! Ocorreu um erro: " + err);
          });
      }, [id, token]);

      function mapear(docs) {
        const lista = [];

        console.log(docs)
        docs?.forEach(doc => (
          lista.push(
            doc.map((item, index) =>
            <li key={index}>
                <h3>{item.texto}</h3>
              </li>
            )
          )
        ));

        return lista;
      }

      return (
        <ul>{mapear(docs)}</ul>
      );
}

export default Grid;