import Form from "react-bootstrap/Form";
import "../css/Login.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";


function FormFloatingCustom() {
  return (
    <div className="body">
      <div>
        <FaRegCircleUser className="UserIcon mb-4" />
      </div>
      <div className="formulario mt-4">
        <div>
          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email</label>
          </Form.Floating>
          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Senha</label>
          </Form.Floating>
          <div className="Buttons mb-3 d-flex justify-content-center">
            <Button className="Button">Login</Button>
          </div>
          <div className="Buttons d-flex justify-content-center">
            <Button className="Button">Primeira vez aqui? Cadastre-se</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormFloatingCustom;