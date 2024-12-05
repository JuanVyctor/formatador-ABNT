import { useState } from 'react';
import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function FormFloatingCustom() {
  const [user, setUser] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const [token] = useState(localStorage.getItem('token'));

  api
    .get(`/usuarios`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(token);
      setUser(response.data);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

  let nome = user?.nome;
  let email = user?.email;

  const handlePutUser = data =>
    api.put(`/usuarios`, data)
    .then(() => {
      alert('O procedimento deu certo');
      navigate(`/perfil`);
    }).catch((error) => {
      alert('Ocorreu um erro inesperado: ' + error.message);
      navigate(`/perfil`);
    });

  function handleDeleteUser() {
    if (window.confirm('Tem certeza que deseja apagar sua conta?') == true) {
      api.delete(`/usuarios`)
      .then(() => {
        alert('Conta deletada com sucesso.');
        navigate(`/`);
      }).catch(() => {
        alert('Ocorreu um erro inesperado.');
        navigate(`/perfil`);
      });
    }
  }
  
  return (
      <div className="body">
        <div className="">
          <FaRegCircleUser className="UserIcon mb-4" />
        </div>
        <div className="formulario mt-4">
          <form onClick={handleSubmit(handlePutUser)}>
            <Form.Floating className="mb-4">
              <Form.Control
                id="floatingNameCustom"
                type="text"
                placeholder="Name"
                value={nome}
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
                value={email}
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
            <div className="Buttons d-flex justify-content-center">
              <a>
                <Button className="Button">Editar</Button>
              </a>
            </div>
          </form>
          <div className="Buttons d-flex justify-content-center">
            <a>
              <Button className="Button" onClick={handleDeleteUser}>Deletar</Button>
            </a>
          </div>
        </div>
      </div>
  );
}

export default FormFloatingCustom;