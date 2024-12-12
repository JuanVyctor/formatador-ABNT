import { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function FormFloatingCustom() {
  const [id, setId] = useState();
  const [user, setUser] = useState();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      api.get("/id"
      , {
          headers: { Authorization: `Bearer ${token}` },
        })
      .then((response) => {
        setId(response.data)
      }).catch((error) => {
        console.log('Ocorreu um erro inesperado: ' + error.message);
      });
    }
  }, []);

  useEffect(() => {
    api.get(`/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id]);

  const handlePutUser = data =>
    api.put(`/usuarios/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      console.log(data);
      alert('Dados alterados com sucesso.');
      navigate(`/meus_documentos`);
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
    });

  function handleDeleteUser() {
    if (window.confirm('Tem certeza que deseja apagar sua conta?') == true) {
      api.delete(`/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert('Conta deletada com sucesso.');
        navigate(`/`);
      }).catch((error) => {
        alert('Ocorreu um erro inesperado: ' + error.message);
      });
    }
  }
  
  return (
  <div className="body">
    <div>
      <FaRegCircleUser className="UserIcon mb-4" />
    </div>
    <div className='dados'>
      <div>Nome atual: {user?.nome}</div>
      <div>Email atual: {user?.email}</div>
    </div>
    <div className="formulario mt-4">
      <form onSubmit={handleSubmit(handlePutUser)}>
        <Form.Floating className="mb-4">
          <Form.Control
              id="floatingNameCustom"
              type="text"
              placeholder="Name"
              name="nome"
              {...register('nome')}
            />
            <label htmlFor="floatingNameCustom">Nome</label>
        </Form.Floating>
        <Form.Floating className="mb-4">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              name="email"
              {...register('email')}
            />
            <label htmlFor="floatingInputCustom">Email</label>
        </Form.Floating>
        <Form.Floating className="mb-4">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              name="senha"
              {...register('senha')}
            />
            <label htmlFor="floatingPasswordCustom">Senha</label>
        </Form.Floating>
        <div className="Buttons mb-3 d-flex justify-content-center">
          <Button className="Button" type="submit">
            Atualizar
          </Button>
          <Button className="Button" onClick={handleDeleteUser}>
            Excluir
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default FormFloatingCustom;