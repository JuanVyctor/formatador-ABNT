import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function FormFloatingCustom() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const handleAddUser = data =>
  api.post("/signup", data)
  .then((response) => {
    alert('Usuário criado com sucesso.');
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('usu_id', data.usu_id);
    navigate(`/meus_documentos`);
  }).catch((error) => {
    alert('Ocorreu um erro inesperado: ' + error.message);
  });

  return (
    <div className="body">
      <div className="">
        <FaRegCircleUser className="UserIcon mb-4" />
      </div>
      <div className="formulario mt-4">
        <form onSubmit={handleSubmit(handleAddUser)}>
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