import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../css/Navigation.css';
import logo from '../logo.svg';
import { FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useParams } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="custom-nav">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
        
          <img
            alt="Logo"
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
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
          <Link to="/about_us">
            <span className="about-us-text me-2">About us</span>
          </Link>
        <Dropdown>
            <Dropdown.Toggle className='dropButton' id="dropdown-basic">
                <FaCircleUser className="profile-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Minha Conta</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Meus Documentos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
