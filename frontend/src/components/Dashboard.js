import { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import newDocument from "../newDocOficial.png";
import "../css/Dashboard.css";
import api from "../services/api";
import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Documentos() {
  const [token] = useState(localStorage.getItem('token'));
  const [docs, setDocs] = useState([]);
  const id = 1;
  
  useEffect(() => {
    setDocs([
      {'texto' : 'texto12345', 'autor' : 'juliana'},
      {'texto' : 'texto12345', 'autor' : 'juliana'},
      {'texto' : 'texto12345', 'autor' : 'juliana'},
      {'texto' : 'texto12345', 'autor' : 'juliana'},
      {'texto' : 'texto12345', 'autor' : 'juliana'},
    ]);
    //   api.get(`/usuarios/${id}/documentos`
      //     , {
      //         headers: { Authorization: `Bearer ${token}` },
      //       }
      //     )
      //     .then((response) => {
      //       setDocs(response.data);
      //     })
      //     .catch((err) => {
      //       console.error("Ops! Ocorreu um erro: " + err);
      //     });
      }, []);

      function mapear() {
        const lista = [];
        docs?.forEach((doc, index) => {
          lista.push(
            <Link className='textos' to={`/editar_documento/${index}`}>
              <li>
                <Card className='lista'>
                  Documento {index+1}: {doc.texto}
                </Card>
              </li>
            </Link>
          )
        })
        return lista;
      }

      return (
        <Container>
          <Row>
            <Col className='col-4'>
              <div className='novoDoc'>
                <Link to="/">
                  <img className='imagemNovoDoc' src={newDocument}/>
                </Link>
              </div>
            </Col>
            <Col className='col-8 colunaMostraDocs'>
              {/* <Card className='lista'> */}
                <ul>{mapear()}</ul>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      );
}

export default Documentos;