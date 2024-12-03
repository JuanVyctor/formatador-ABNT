import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import newDocument from "../newDocument.png";
import imagem from "../imagem.jpg";
import "../css/Dashboard.css";
import api from "../services/api";

function List(id) {
  // const [docs, setDocs] = useState();
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
}

function Grid() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={newDocument} />
      </Card>
      <Card style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Img src={imagem} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Grid;