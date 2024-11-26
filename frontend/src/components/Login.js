import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../css/Login.css';

function FormFloatingCustom() {
  return (
    <div className="">
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="nome@exemplo.com"
          className="formulario"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Senha"
          className="formulario"
        />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating>
      <hr></hr>
      <a>
        <Button variant="outline-primary">Login</Button>
      </a>
      <hr></hr>
      <a>
        <Button variant="outline-primary">
          Primeira vez aqui? Cadastre-se
        </Button>
      </a>
    </div>
  );
}

export default FormFloatingCustom;