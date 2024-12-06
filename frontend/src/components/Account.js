import { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function FormFloatingCustom() {
  const id = 2;
  const [user, setUser] = useState();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem('token'));

  // useEffect(() => {
  //   api.get(`/usuarios/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //       console.log(user)
  //     })
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // });

  // const handlePutUser = data => console.log(data)
  //   api.put(`/usuarios/${id}`, data)
  //   .then(() => {
  //     alert('Dados alterados com sucesso.');
  //     navigate(`/perfil`);
  //     console.log(data)
  //   }).catch((error) => {
  //     alert('Ocorreu um erro inesperado: ' + error.message);
  //   });

  // function handleDeleteUser() {
  //   if (window.confirm('Tem certeza que deseja apagar sua conta?') == true) {
  //     api.delete(`/usuarios`)
  //     .then(() => {
  //       alert('Conta deletada com sucesso.');
  //       navigate(`/`);
  //     }).catch(() => {
  //       alert('Ocorreu um erro inesperado.');
  //     });
  //   }
  // }
  
  return (
  <div className="body">
    <div>
      <FaRegCircleUser className="UserIcon mb-4" />
    </div>
    <div className="formulario mt-4">
      <form>
      {/* <form onSubmit={handleSubmit(handleAddUser)}> */}
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
            Criar Conta
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default FormFloatingCustom;