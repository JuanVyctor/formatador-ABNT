import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../css/Navigation.css";
import logo from "../logo.svg";
import { FaCircleUser } from "react-icons/fa6";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';

const Navigation = () => {
  const [token] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  
  function handleLogout() {
    api
      .post(
        "/logout", 
        {}, 
        {
          headers: { Authorization: `Bearer ${token}` }, 
        }
      )
      .then((response) => {
        console.log(response);
        alert("Você saiu com sucesso!");
        localStorage.removeItem("token");
        navigate("/"); 
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao tentar deslogar.");
      });
  }

  function dropdown() {
    if (token !== null) {
      return (
        <Dropdown>
          <Dropdown.Toggle className="dropButton" id="dropdown-basic">
            <FaCircleUser className="profile-icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/perfil`} className="dropLink">
                Minha Conta
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/meus_documentos" className="dropLink">
                Meus Documentos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link onClick={handleLogout} className="dropLink">Sair</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Link to="/login" className='about-us-text about entrar'>
          <div>
            Entrar
          </div>
        </Link>
      ); 
    }
  }

  return (
    <Navbar className="custom-nav">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <Link to={token ? "meus_documentos" : "/"} >
            <img
              alt="Logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top rounded-circle"
            />
          </Link>
        </Navbar.Brand>
        <div className="ABNT">Formatador ABNT</div>
        <div className="d-flex align-items-center">
          <Link to="/sobre_nos" className="about">
            <span className="about-us-text me-2">Sobre nós</span>
          </Link>
          {dropdown()}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
