import Form from "react-bootstrap/Form";
import "../css/Login.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function FormFloatingCustom() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const getUser = data => api.post("/login", data)
  .then((response) => {
    alert('Login realizado com sucesso!');
    localStorage.setItem('token', response.data.token);
    navigate(`/meus_documentos`);
  }).catch((error) => {
    alert('Ocorreu um erro inesperado: ' + error.message);
  });

  return (
    <div className="body">
      <div>
        <FaRegCircleUser className="UserIcon mb-4" />
      </div>
      <div className="formulario mt-4">
        <form onSubmit={handleSubmit(getUser)}>
          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              name="email"
              {...register("email")}
            />
            <label htmlFor="floatingInputCustom">Email</label>
          </Form.Floating>
          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              name="senha"
              {...register("senha")}
            />
            <label htmlFor="floatingPasswordCustom">Senha</label>
          </Form.Floating>
          <div className="Buttons mb-3 d-flex justify-content-center">
            <Button className="Button" type="submit">
              Login
            </Button>
          </div>
          <div className="Buttons d-flex justify-content-center">
            <Link to="/cadastrar">
              <Button className="Button">Primeira vez aqui? Cadastre-se</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormFloatingCustom;