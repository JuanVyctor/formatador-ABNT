import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../css/Navigation.css';
import logo from '../logo.svg';
import { FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';


const Navigation = () => {

  const navigate = useNavigate();
  function handleLogout(id) {
    api.post('/logout', id);
    navigate('/');
  }
  // const estaLogado = true;
  // const conta = ({}) => {
  //   if (estaLogado == true) {
  //     return (
  //       <Dropdown>
  //         <Dropdown.Toggle className="dropButton" id="dropdown-basic">
  //           <FaCircleUser className="profile-icon" />
  //         </Dropdown.Toggle>
  //         <Dropdown.Menu>
  //           <Link to={`/login/${1}`}>
  //             <Dropdown.Item>Minha Conta</Dropdown.Item>
  //           </Link>
  //           <Link to={`/meus_documentos/${1}`}>
  //             <Dropdown.Item>Meus Documentos</Dropdown.Item>
  //           </Link>
  //         </Dropdown.Menu>
  //       </Dropdown>
  //     );
  //   } else {
  //     return 
  //       <Link to="/login" className="about">
  //         <span className="about-us-text me-2">Login</span>
  //       </Link>;
  //   }
  // }

  // coisas a serem testadas com os tokens funcionando

  return (
    <Navbar className="custom-nav">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="Logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top rounded-circle"
            />
          </Link>
        </Navbar.Brand>
        <Form className="d-flex justify-content-center flex-grow-0 mx-4">
          <div className="position-relative search-container">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input form-control"
            />
            <FaSearch className="search-icon" />
          </div>
        </Form>
        <div className="d-flex align-items-center">
          <Link to="/sobre_nos" className="about">
            <span className="about-us-text me-2">Sobre nós</span>
          </Link>
          <Dropdown>
            <Dropdown.Toggle className="dropButton" id="dropdown-basic">
              <FaCircleUser className="profile-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to={`/login/${1}`}>
                <Dropdown.Item>Minha Conta</Dropdown.Item>
              </Link>
              <Link to={`/meus_documentos/${1}`}>
                <Dropdown.Item>Meus Documentos</Dropdown.Item>
              </Link>
                <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
