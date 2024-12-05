import { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import newDocument from "../newDocOficial.png";
import "../css/Dashboard.css";
import api from "../services/api";
import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";

function Grid() {
  const [token] = useState(localStorage.getItem('token'));
  const [docs, setDocs] = useState([]);
  const id = 1;
  
      useEffect(() => {
        api.get(`/usuarios/${id}/documentos`
          , {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => {
            setDocs(response.data);
          })
          .catch((err) => {
            console.error("Ops! Ocorreu um erro: " + err);
          });
      }, [token]);

      function mapear() {
        const lista = [];
        lista.push(docs?.forEach((doc, index) => {
          console.log(index)
          // <li>
          //   Texto do documento {index+1}: {doc['texto']}
          // </li>
        }))
        // docs.forEach(doc => (
        //   // lista.push(<li>{doc?.texto}</li>)
        //   lista.push(
        //     doc.map((item, index) =>
        //       <li key={index}>
        //         <h3>{item.texto}</h3>
        //       </li>
        //     )
        //   )
        // ));

        return lista;
      }

      return (
        <Container>
          <Row>
            <Col className='col-4 colunaNovoDoc'>
              <div className='novoDoc'>
                <Link to="/">
                  <img className='imagemNovoDoc' src={newDocument}/>
                </Link>
                </div>
            </Col>
            <Col className='col-8'>
            <ul>{mapear()}</ul>
            </Col>
          </Row>
        </Container>
      );
}

export default Grid;