import Form from "react-bootstrap/Form";
import "../css/SignUp.css";
import { FaRegCircleUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";

function FormFloatingCustom() {
  return (
    <>
      <div className="body">
        <div className="">
          <FaRegCircleUser className="UserIcon mb-4" />
        </div>
        <div className="formulario mt-4">
          <div>
            <Form.Floating className="mb-4">
              <Form.Control
                id="floatingNameCustom"
                type="text"
                placeholder="Name"
              />
              <label htmlFor="floatingNameCustom">Nome</label>
            </Form.Floating>
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
            <div className="Buttons d-flex justify-content-center">
              <a>
                <Button className="Button">Criar Conta</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormFloatingCustom;